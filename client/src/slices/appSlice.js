import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from '../services/auth.js';
import PostsService from "../services/posts.js";
export const login = createAsyncThunk(
  'app/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem("token", response.token); 
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  'app/register',
  async ({ username, password, email, firstName, secondName, city }, { rejectWithValue }) => {
    try {
      console.log(username, password, email, firstName, secondName, city);
      const response = await AuthService.register(username, password, email, firstName, secondName, city);
      localStorage.setItem("token", response.token); 
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const post = createAsyncThunk(
  "app/post",
  async ({title, content, category, avatar, goal, accountDetails}, {rejectWithValue}) => {
    try{
      console.log("bagi");
      console.log(localStorage.getItem("token"));
      const response = await PostsService.postpost(title, content, category, avatar, goal, accountDetails);
      return response;
    }catch(err){
      return rejectWithValue(err.response.data);
    }
  }
);


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoggedIn: false,
    user: "",
    status: 'idle',
    error: null,
    modal: false
  },
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    openModal: (state) => { 
      state.modal = true;
    },
    closeModal: (state) => { 
      state.modal = false;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        console.log(action);
        state.user = action.meta.username;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to login';
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.meta.username;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to register';
      })
      .addCase(post.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(post.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(post.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
      
  }
});

export default appSlice.reducer;
export const { setAuth, setUser, openModal, closeModal } = appSlice.actions;
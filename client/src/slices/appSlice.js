import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from '../services/auth.js';

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

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoggedIn: false,
    user: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
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
        state.user = action.payload.user;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to register';
      });
  }
});

export default appSlice.reducer;
export const { setAuth, setUser } = appSlice.actions;
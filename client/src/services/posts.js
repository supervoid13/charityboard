import instance from '../axios.js';

export default class PostsService {
  static async postpost(title, content, category, avatar, goal, accountDetails){
    console.log(title, content, category, avatar, goal, accountDetails);
    return instance.post('/posts', {title, content, category, avatar, goal, accountDetails})
     .then(response => response.data);
  }
  static async getPosts(){
    return instance.get('/posts')
     .then(response => response.data);
  }
  static async getPost(id){
    return instance.get(`/posts/${id}`)
     .then(response => response.data);
  }
}
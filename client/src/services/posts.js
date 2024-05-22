import instance from '../axios.js';

export default class PostsService {
  static async postpost(title, content, category, avatar, goal, accountDetails){
    return instance.post('/posts', {title, content, category, avatar, goal, accountDetails})
     .then(response => response.data);
  }
}
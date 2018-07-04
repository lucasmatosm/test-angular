import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
/**
 * Post Service declaration
 */
export class PostsService {
  /**
   * List of comments
   */
  comments: any = [];
  /**
   * List of posts
   */
  posts: any = [];
  /**
   * List of comments Event Emitter
   */
  listComments = new EventEmitter<any>();
  /**
   * List of posts Event Emitter
   */
  listPosts = new EventEmitter<any>();

  /**
   * Method to get all posts.
   */
  getPosts() {
    return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts');
  }
  /**
   * Method to get all comments of a post with the id
   * @param id
   */
  getPostComent(id) {
     return this.http.get('https://my-json-server.typicode.com/typicode/demo/comments').subscribe(data => {
        this.comments = data;
        this.listComments.emit(this.comments.filter(elemnt => elemnt.postId === id));
     });
  }
  /**
   * Method save a new comment in a post.
   * @param post
   */
  newComment(post) {
    this.http.post('https://my-json-server.typicode.com/typicode/demo/comments', {
      'body': post.message,
      'postId': post.id
    }).subscribe(data => {
      this.http.get('https://my-json-server.typicode.com/typicode/demo/comments').subscribe(dataComments => {
        this.comments = dataComments;
        const filterComments = this.comments.filter(elemnt => elemnt.postId === post.id);
        filterComments.push(data);
        this.listComments.emit(filterComments);
      });
    }, error => {
    });
  }
  /**
   * Method to save a new post
   * @param post
   */
  newPost(post) {
    this.http.post('https://my-json-server.typicode.com/typicode/demo/posts', {
      'title': post,
    }).subscribe(data => {
      this.http.get('https://my-json-server.typicode.com/typicode/demo/posts').subscribe(dataPosts => {
        this.posts = dataPosts;
        this.posts.push(data);
        this.listPosts.emit(this.posts);
      });
    }, error => {
    });
  }
  /**
   * post service constructor
   * @param http
   */
  constructor(private http: HttpClient) { }
}

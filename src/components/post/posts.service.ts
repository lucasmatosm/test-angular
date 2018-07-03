import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  comments: any = [];

  listComments = new EventEmitter<any>();

  getPosts() {
    return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts');
  }
  getPostComent(id) {
     return this.http.get('https://my-json-server.typicode.com/typicode/demo/comments').subscribe(data => {
        this.comments = data;
        this.listComments.emit(this.comments.filter(elemnt => elemnt.postId === id));
     });
  }

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

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getPosts() {
    return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts');
  }
  getPostComent(id) {
     return this.http.get('https://my-json-server.typicode.com/typicode/demo/comments').subscribe(data => {

     });
  }

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getPosts() {
    return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts');
  }

  constructor(private http: HttpClient) { }
}

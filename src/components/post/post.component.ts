import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public postList: any;
  public commentsList = [];
  constructor(private postsService: PostsService) { }

   public getComents(id) {
       this.postsService.getPostComent(id);

   }
  newComment(post) {
     this.postsService.newComment(post);
  }

  ngOnInit() {
    this.postsService.getPosts().subscribe(data  => {
      this.postList = data;
    });
    this.postsService.listComments.subscribe(data => {
      this.commentsList = data;
      console.log(data);
    });
  }

}

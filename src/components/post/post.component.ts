import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public postList: any;
  public commentsList: any;
  constructor(private postsService: PostsService) { }

  

  ngOnInit() {
    this.postsService.getPosts().subscribe(data  => {
      this.postList = data;
    });
  }

}

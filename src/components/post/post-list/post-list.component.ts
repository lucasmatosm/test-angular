import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public postList: any;

  newComment(post) {
     if (post.message !== undefined && post.message !== '' && !(post.message.match(/^\s+$/))) {
       this.postsService.newComment(post);
    }
  }

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(data  => {
      this.postList = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  public commentsList = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.listComments.subscribe(data => {
      this.commentsList = data;
    });
  }

}

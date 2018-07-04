import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
/**
 * Component selector
 */
@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
/**
 * Comments lis class
 * @implements OnInit
 */
export class CommentsListComponent implements OnInit {
  /**
   * List of comments.
   */
  public commentsList = [];
  /**
   * Comments List constructor
   * @param postsService
   */
  constructor(private postsService: PostsService) { }
  /**
   * Method executed when the component is open
   */
  ngOnInit() {
    this.postsService.listComments.subscribe(data => {
      this.commentsList = data;
    });
  }

}

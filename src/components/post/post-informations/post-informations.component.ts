import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';

/**
 * @ignore
 */
@Component({
  selector: 'app-post-informations',
  templateUrl: './post-informations.component.html',
  styleUrls: ['./post-informations.component.css']
})
/**
 * Post information class definition
 * @implements OnInit
 */
export class PostInformationsComponent implements OnInit {
  /**
   * Post selected.
   */
   postSelectd: any;
  /**
   * List of comments.
   */
  public commentsList = [];
  /**
   * Post information constructor
   * @param postsService
   */
  constructor(private postsService: PostsService) { }
  /**
   * Method executed on initiate the class.
   */
  ngOnInit() {
    this.postsService.postSelected.subscribe(post => {
      this.postSelectd = post;
    });
    this.postsService.listComments.subscribe(data => {
      this.commentsList = data;
    });
  }

}

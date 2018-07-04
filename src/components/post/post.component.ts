import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';
/**
 * Component selector
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
/**
 * Post componet class
 * @implements OnInit
 */
export class PostComponent implements OnInit {
  /**
   * List of posts.
   */
  public postList: any;
  /**
   * Post message.
   */
  message;
  /**
   * Post Component constructor
   * @param postsService
   */
  constructor(private postsService: PostsService) { }
  /**
   * Method save a new post
   * @param message
   */
  newPost(message) {
    console.log(message);
    if (message !== undefined && message !== '' && !(message.match(/^\s+$/))) {
      this.postsService.newPost(message);
    }
  }
  /**
   * Method executed when the component is open
   */
  ngOnInit() {
    this.postsService.getPosts().subscribe(data  => {
      this.postList = data;
    });
    this.postsService.listPosts.subscribe(data => {
       this.postList = data;
    });
  }

}

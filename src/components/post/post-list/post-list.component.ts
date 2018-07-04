import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {a} from '@angular/core/src/render3';
/**
 * @ignore
 */
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
/**
 * POst list component declaration
 * @implements OnInit
 */
export class PostListComponent implements OnInit {
  /**
   * List of posts.
   */
  public postList: any;
  /**
   * Method to save a new component
   * @param post
   */
  newComment(post) {
     if (post.message !== undefined && post.message !== '' && !(post.message.match(/^\s+$/))) {
       this.postsService.newComment(post);
    }
  }
  /**
   * Post List constructor
   * @param postsService
   */
  constructor(private postsService: PostsService) { }
  /**
   * Method executed when the component is open
   */
  ngOnInit() {
    this.postsService.getPosts().subscribe(data  => {
      this.postList = data;
    });
  }

}

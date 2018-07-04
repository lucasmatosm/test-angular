import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';


@Component({
  selector: 'app-post-informations',
  templateUrl: './post-informations.component.html',
  styleUrls: ['./post-informations.component.css']
})
export class PostInformationsComponent implements OnInit {
   postSelectd;
  /**
   * List of comments.
   */
  public commentsList = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.postSelected.subscribe(post =>{
      this.postSelectd = post;
    });
    this.postsService.listComments.subscribe(data => {
      this.commentsList = data;
    });
  }

}

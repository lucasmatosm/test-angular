import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {PostsService} from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ScrollPanelModule
  ],
  declarations: [PostComponent],
  providers: [PostsService]
})

export class PostModule { }

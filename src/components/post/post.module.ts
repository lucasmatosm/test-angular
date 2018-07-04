import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {PostsService} from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule} from '@angular/forms';
import {PostListComponent} from './post-list/post-list.component';
import {CommentsListComponent} from './comments-list/comments-list.component';
import {PostInformationsComponent} from './post-informations/post-informations.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ScrollPanelModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    InputTextModule,
    InputTextareaModule, FormsModule
  ],
  declarations: [PostComponent, PostListComponent, CommentsListComponent, PostInformationsComponent],
  providers: [PostsService]
})

export class PostModule { }

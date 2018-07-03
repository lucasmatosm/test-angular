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
  declarations: [PostComponent],
  providers: [PostsService]
})

export class PostModule { }

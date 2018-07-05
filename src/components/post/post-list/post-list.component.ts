import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {ConfirmationService, Message} from 'primeng/api';
/**
 * @ignore
 */
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [ConfirmationService]
})
/**
 * POst list component declaration
 * @implements OnInit
 */
export class PostListComponent implements OnInit {
  /**
   * post after edited
   */
  postEdited: any;
  /**
   * Variable to edit post.
   */
  editingPost = -1;
  /**
   * Post for remove action.
   */
  removePost: any;
  /**
   * Messages to show.
   */
  msgs: Message[] = [];
  /**
   * List of posts.
   */
  public postList: any = [];
  /**
   * Method to save a new component
   * @param post
   */
  newComment(post: any) {
     if (post.message !== undefined && post.message !== '' && !(post.message.match(/^\s+$/))) {
       this.postsService.postSelected.emit(post);
       this.postsService.newComment(post);
       post.message = '';
    }
  }
  /**
   * Method to set the post to editing
   * @param post
   */
  editPost(post: number) {
    this.editingPost = post;
  }
  /**
   * Method Call the edit post service.
   * @param post
   */
  editPostService(post: any) {
    this.postEdited = post;
    this.postsService.editPost(post);
  }
  /**
   * Method to cancel edit the post.
   */
  cancelPostEdit() {
    this.postsService.getPosts().subscribe(data  => {
      this.postList = data;
      this.editingPost = -1;
    });
  }
  /**
   * Method to call the remove post service.
   * @param post
   */
  removePostService(post: any) {
    this.postsService.removePost(post);
  }

  /**
   * Method get all comments of a post
   * @param post
   */
  public getComents(post: any) {
    this.postsService.postSelected.emit(post);
    this.postsService.getPostComent(post.id);
  }
  /**
   * Post List constructor
   * @param postsService
   * @param confirmationService
   */
  constructor(private postsService: PostsService, private confirmationService: ConfirmationService) { }
  /**
   * Method to open the remove dialog.
   * @param post
   */
  confirmDeletion(post: any) {
    this.removePost = post;
    this.confirmationService.confirm({
      message: 'Tem certeza que quer deletar o post ' + this.removePost.title + '?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.removePostService(this.removePost);
      },
      reject: () => {
      }
    });
  }

  /**
   * Method executed when the component is open
   */
  ngOnInit() {
    this.postsService.getPosts().subscribe(data  => {
        this.postList = data;
    });
    this.postsService.listPosts.subscribe(data => {
      this.msgs = [{severity: 'success', summary: 'Novo post', detail: 'Post adicionado com sucesso'}];
      this.postList = data;
    });
    this.postsService.editpostSelected.subscribe(data => {
      if (data) {
        this.msgs = [{severity: 'success', summary: 'Editado', detail: 'O post ' + this.postEdited.title + ' foi editado'}];
        this.editingPost = -1;
      } else {
        this.msgs = [{severity: 'error', summary: 'Não pode ser Editado', detail: 'O post ' + this.postEdited.title + ' não foi editado'}];
        this.editingPost = -1;
      }
    });
    this.postsService.removepostSelected.subscribe(data => {
      if (this.postList.indexOf(data) !== -1) {
        this.msgs = [{severity: 'info', summary: 'Removido', detail: 'O post ' + this.removePost.title + ' foi removido'}];
        this.postList.splice(this.postList.indexOf(data), 1);
      } else {
        this.msgs = [{severity: 'info', summary: 'Erro de remoção', detail: 'O post ' +
          this.removePost.title + ' não foi removido'}];
      }
    });
  }

}

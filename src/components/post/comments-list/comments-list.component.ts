import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {CommentService} from './comments.service';
import {ConfirmationService, Message} from 'primeng/api';
/**
 * Component selector
 */
@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
  providers: [ConfirmationService]
})
/**
 * Comments list class
 * @implements OnInit
 */
export class CommentsListComponent implements OnInit {
  /**
   * Messages to show.
   */
  msgs: Message[] = [];
  /**
   * List of comments.
   */
  public commentsList = [];
  /**
   * Comments List constructor
   * @param postsService
   * @param commentService
   * @param confirmationService
   */
  constructor(private postsService: PostsService, private commentService: CommentService,
              private confirmationService: ConfirmationService) { }
  /**
   * Variable to edit comment.
   */
  editingComment = -1;
  /**
   * Variable to get the id of the post.
   */
  postId: number;
  /**
   * Comment after edited
   */
  commentEdited: any;
  /**
   * Comment for remove action.
   */
  removeComment: any;
  /**
   * Method to set the comment to editing
   * @param comment
   */
  editComment(comment: number) {
    this.editingComment = comment;
  }
  /**
   * Method cancel the comment edition
   */
  cancelCommentEdit() {
    this.postsService.getPostComent(this.postId);
  }

  /**
   * Method Call the edit comment service.
   * @param comment
   */
  editCommentService(comment: any) {
    this.commentEdited = comment;
    this.commentService.editComment(comment);
  }
  /**
   * Method to call the remove comment service.
   * @param comment
   */
  removeCommentService(comment: any) {
    this.commentService.removeComment(comment);
  }

  /**
   * Method to open the remove dialog.
   * @param comment
   */
  confirmDeletion(comment: any) {
    this.removeComment = comment;
    this.confirmationService.confirm({
      message: 'Tem certeza que quer deletar o comentário ' + this.removeComment.body + '?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: (accepted) => {
        this.removeCommentService(this.removeComment);
      },
      reject: () => {
      }
    });
  }
  /**
   * Method executed when the component is open.
   */
  ngOnInit() {
    this.commentService.editcommentSelected.subscribe(data => {
      if (data) {
        this.msgs = [{severity: 'success', summary: 'Editado', detail: 'O comentário ' +
          this.commentEdited.body + ' foi editado'}];
        this.editingComment = -1;
      } else {
        this.msgs = [{severity: 'error', summary: 'Não pode ser Editado', detail: 'O comentário ' +
          this.commentEdited.body + ' não foi editado'}];
        this.editingComment = -1;
      }
    });
    this.postsService.listComments.subscribe(data => {
      this.commentsList = data;
      this.postId = this.commentsList[0].postId;
      this.editingComment = -1;
    });
    this.commentService.removeCommentSelected.subscribe(data => {
      if (this.commentsList.indexOf(data) !== -1) {
        this.msgs = [{severity: 'info', summary: 'Removido', detail: 'O comentário ' +
          this.removeComment.body + ' foi removido'}];
        this.commentsList.splice(this.commentsList.indexOf(data), 1);
      } else {
        this.msgs = [{severity: 'error', summary: 'Erro de remoção', detail: 'O comentário ' +
          this.removeComment.body + ' não foi removido'}];
      }
    });
  }

}

import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
/**
 * Comment Service declaration
 */
export class CommentService {
  /**
   * remove the comment selected
   */
  removeCommentSelected: EventEmitter<any> = new EventEmitter<any>();
  /**
   * edit the comment Selected
   */
  editcommentSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   * Method to edit the comment
   * @param comment
   */
  public editComment(comment) {
    this.http.patch('https://my-json-server.typicode.com/typicode/demo/comments/' + comment.id,
      { 'body': comment.body}).subscribe(data => {
      this.editcommentSelected.emit(true);
    }, error => {
      this.editcommentSelected.emit(false);
    });
  }
  /**
   * Method to remove the comment
   * @param comment
   */
  removeComment(comment) {
    this.http.delete('https://my-json-server.typicode.com/typicode/demo/comments/' + comment.id).subscribe(data => {
      this.removeCommentSelected.emit(comment);
    }, error => {
      this.removeCommentSelected.emit({});
    });
  }
  /**
   * comment service constructor
   * @param http
   */
  constructor(private http: HttpClient) { }
}

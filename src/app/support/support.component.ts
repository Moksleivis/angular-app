import { Component } from '@angular/core';
import { Comment } from '../comment';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {
  comments: Comment[] = [];
  newAuthor: string = '';
  newComment: string = '';

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.comments = this.commentService.getComments();
  }

  addComment() {
    this.comments.push({
      id: this.comments.length + 1,
      author: this.newAuthor,
      content: this.newComment,
    });

    this.newAuthor = '';
    this.newComment = '';
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IComment } from 'src/app/interfaces/icomment';
import { IPost } from 'src/app/interfaces/ipost';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService, private formBuilder: FormBuilder) {
    this.commentForm = formBuilder.group({
      message: new FormControl(this.message, Validators.required),
    });
  }

  commentForm: FormGroup;
  @Input() postId = 0;
  @Output() emitComments: EventEmitter<IComment[]> = new EventEmitter();
  message = '';

  ngOnInit() {}

  writeComment() {
    this.newsfeedDataService.writeComment(this.postId, this.message);

    const post: IPost = this.newsfeedDataService.findPost(this.postId);

    this.emitComments.emit(post.comments);

    this.commentForm.reset();
  }
}

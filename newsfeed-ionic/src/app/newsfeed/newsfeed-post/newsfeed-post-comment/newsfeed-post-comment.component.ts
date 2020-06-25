import { Component, OnInit, Input } from '@angular/core';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsfeed-post-comment',
  templateUrl: './newsfeed-post-comment.component.html',
  styleUrls: ['./newsfeed-post-comment.component.scss'],
})
export class NewsfeedPostCommentComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService, private formBuilder: FormBuilder) {
    this.commentForm = formBuilder.group({
      message: new FormControl(this.message, Validators.required),
    });
  }

  commentForm: FormGroup;
  @Input() postId = 0;
  message = '';

  ngOnInit() {}

  writeComment() {
    this.newsfeedDataService.writeComment(this.postId, this.message);
    this.commentForm.reset();
  }
}

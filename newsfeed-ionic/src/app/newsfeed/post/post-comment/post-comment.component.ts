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
  comment: any;
  @Input() post!: IPost;

  constructor(private newsfeedDataService: NewsfeedDataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.comment = new FormControl('', Validators.required);
  }

  writeComment() {
    const comment: string = this.comment.value;
    this.newsfeedDataService.addComment(this.post.id, comment);
    this.comment.reset();
  }
}

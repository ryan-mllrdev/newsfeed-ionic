import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { IComment } from 'src/app/interfaces/icomment';
import { IReaction } from 'src/app/interfaces/ireaction';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;

  constructor(private newsfeedDataService: NewsfeedDataService) {}

  ngOnInit() {}
}

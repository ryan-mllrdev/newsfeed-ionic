import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss'],
})
export class PostSummaryComponent implements OnInit {
  constructor() {}

  @Input() numberOfLikes = 0;
  @Input() numberOfHearts = 0;
  @Input() numberOfSmiles = 0;
  @Input() numberOfComments = 0;

  ngOnInit() {}
}

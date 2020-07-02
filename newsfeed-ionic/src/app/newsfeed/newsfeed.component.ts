import { Component, OnInit, Input } from '@angular/core';
import { NewsfeedDataService } from '../services/newsfeed-data.service';
import { IPost } from '../interfaces/ipost';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  formModal: any;
  @Input() newsfeed: IPost[] = [];
  post!: IPost;
  searchKeyword: any;

  constructor() {}

  ngOnInit() {
    this.searchKeyword = new FormControl('');
  }
}

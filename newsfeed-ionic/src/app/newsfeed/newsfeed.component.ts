import { Component, OnInit, Input } from '@angular/core';
import { NewsfeedDataService } from '../services/newsfeed-data.service';
import { IPost } from '../interfaces/ipost';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  formModal: any;
  @Input() newsfeed: IPost[] = [];
  searchForm: any;
  post!: IPost;
  searchKeyword = '';

  constructor(private newsfeedDataService: NewsfeedDataService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchKeyword: [],
    });

    this.searchForm.controls.searchKeyword.valueChanges.subscribe((searchKeyword: any) => {
      this.searchKeyword = searchKeyword;
    });
  }
}

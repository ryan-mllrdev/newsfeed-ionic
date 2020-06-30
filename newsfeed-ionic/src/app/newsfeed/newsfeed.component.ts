import { Component, OnInit, Type } from '@angular/core';
import { NewsfeedDataService } from '../services/newsfeed-data.service';
import { IPost } from '../interfaces/ipost';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FormModalComponent } from './post/post-form/form-modal/form-modal.component';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  formModal: any;
  newsfeed: IPost[] = [];
  searchForm: any;
  post!: IPost;
  searchKeyword = '';

  constructor(private newsfeedDataService: NewsfeedDataService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loadNewsfeed();

    this.searchForm = this.formBuilder.group({
      searchKeyword: [],
    });

    this.searchForm.controls.searchKeyword.valueChanges.subscribe((searchKeyword: any) => {
      this.searchKeyword = searchKeyword;
    });
  }

  private loadNewsfeed() {
    this.newsfeed = this.newsfeedDataService.newsfeed;
  }
}

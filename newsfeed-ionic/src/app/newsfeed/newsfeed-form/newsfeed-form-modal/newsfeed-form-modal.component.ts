import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPost } from 'src/app/interfaces/ipost';
import { Post } from 'src/app/models/post';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newsfeed-form-modal',
  templateUrl: './newsfeed-form-modal.component.html',
  styleUrls: ['./newsfeed-form-modal.component.scss'],
})
export class NewsfeedFormModalComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private newsfeedDataService: NewsfeedDataService,
    private formBuilder: FormBuilder,
  ) {
    this.post = new Post();
    this.postForm = formBuilder.group({});
  }

  postForm: FormGroup;
  post: IPost;
  postId = 0;
  @Input() showModal = true;

  ngOnInit() {
    this.getPost();
  }

  private getPost() {
    if (!this.postId) {
      this.post = new Post();
    } else {
      this.post = this.newsfeedDataService.findPost(this.postId);
    }

    this.postForm = this.formBuilder.group({
      message: new FormControl(this.post.message, Validators.required),
    });
  }

  postMessage() {
    this.showModal = false;

    if (this.post.id) {
      this.newsfeedDataService.updatePost(this.post);
    } else {
      this.newsfeedDataService.savePost(this.post);
    }
    this.modalController.dismiss();
  }

  closeModal() {
    this.showModal = false;
    this.modalController.dismiss();
  }
}

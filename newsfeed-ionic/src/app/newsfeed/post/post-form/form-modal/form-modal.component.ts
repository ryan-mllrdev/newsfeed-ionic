import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPost } from 'src/app/interfaces/ipost';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  postForm!: FormGroup;
  @Input() post!: IPost;
  @Input() showModal = false;

  constructor(
    private modalController: ModalController,
    private newsfeedDataService: NewsfeedDataService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      id: [],
      message: ['', Validators.required],
      date: [],
      postedBy: [],
      comments: [],
      reactions: [],
    });
    if (this.post && this.post.id) {
      this.postForm.setValue(this.post);
    }
  }

  postMessage() {
    this.showModal = false;
    this.modalController.dismiss(this.postForm.value);
  }

  closeModal() {
    this.showModal = false;
    this.postForm.reset();
    this.modalController.dismiss();
  }
}

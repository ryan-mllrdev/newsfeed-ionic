import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPost } from 'src/app/interfaces/ipost';
import { Post } from 'src/app/models/post';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';

@Component({
  selector: 'app-newsfeed-form-modal',
  templateUrl: './newsfeed-form-modal.component.html',
  styleUrls: ['./newsfeed-form-modal.component.scss'],
})
export class NewsfeedFormModalComponent implements OnInit {
  constructor(private modalController: ModalController, private newsfeedDataService: NewsfeedDataService) {}

  post: IPost = new Post();
  @Input() showModal = true;

  ngOnInit() {}

  postMessage() {
    this.showModal = false;
    this.newsfeedDataService.savePost(this.post);
    this.modalController.dismiss();
  }

  closeModal() {
    this.showModal = false;
    this.modalController.dismiss();
  }
}

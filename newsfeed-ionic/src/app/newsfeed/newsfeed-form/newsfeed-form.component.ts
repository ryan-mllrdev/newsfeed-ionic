import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { NewsfeedFormModalComponent } from './newsfeed-form-modal/newsfeed-form-modal.component';
import { IPost } from 'src/app/interfaces/ipost';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-newsfeed-form',
  templateUrl: './newsfeed-form.component.html',
  styleUrls: ['./newsfeed-form.component.scss'],
})
export class NewsfeedFormComponent implements OnInit {
  modal: any;
  showModal = false;

  constructor(private modalController: ModalController, private newsfeedDataService: NewsfeedDataService) {}

  ngOnInit() {}

  async showPostForm() {
    this.showModal = true;
    this.modal = await this.modalController.create({
      component: NewsfeedFormModalComponent,
      cssClass: '',
      showBackdrop: true,
      backdropDismiss: false,
    });
    this.modal.onDidDismiss().then(() => {
      this.showModal = false;
    });
    return await this.modal.present();
  }
}

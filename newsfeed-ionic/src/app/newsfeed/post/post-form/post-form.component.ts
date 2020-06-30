import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { FormModalComponent } from './form-modal/form-modal.component';
import { IPost } from 'src/app/interfaces/ipost';
import { NewsfeedNotificationService } from 'src/app/services/newsfeed-notification.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  modal!: any;
  @Input() post!: IPost;

  constructor(
    private modalController: ModalController,
    private newsfeedDataService: NewsfeedDataService,
    private newsfeedNotificationService: NewsfeedNotificationService,
  ) {}

  ngOnInit() {}

  async Open() {
    this.modal = await this.modalController.create({
      component: FormModalComponent,
      cssClass: 'form-modal',
      showBackdrop: true,
      backdropDismiss: false,
      componentProps: {
        post: this.post,
        showModal: true,
      },
    });

    this.modal.onDidDismiss().then(async (formData: any) => {
      if (!formData.data) {
        return;
      }
      const post: IPost = formData.data;
      this.newsfeedDataService.createPost(post);
      await this.newsfeedNotificationService.showSuccess('Message successfully posted.');
    });
    return await this.modal.present();
  }
}

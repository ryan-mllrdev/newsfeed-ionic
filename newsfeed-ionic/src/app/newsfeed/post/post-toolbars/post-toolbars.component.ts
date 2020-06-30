import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { AlertController, ModalController, AngularDelegate, ToastController } from '@ionic/angular';
import { PostFormComponent } from '../post-form/post-form.component';
import { IPost } from 'src/app/interfaces/ipost';
import { FormModalComponent } from '../post-form/form-modal/form-modal.component';
import { NewsfeedNotificationService } from 'src/app/services/newsfeed-notification.service';

@Component({
  selector: 'app-post-toolbars',
  templateUrl: './post-toolbars.component.html',
  styleUrls: ['./post-toolbars.component.scss'],
})
export class PostToolbarsComponent implements OnInit, OnDestroy {
  modal: any;
  @Input() post!: IPost;

  constructor(
    private newsfeedDataService: NewsfeedDataService,
    private alertController: AlertController,
    private modalController: ModalController,
    private newsfeedNotificationService: NewsfeedNotificationService,
  ) {}

  ngOnInit() {}
  ngOnDestroy() {}

  async editPost() {
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
      this.newsfeedDataService.updatePost(post);
      await this.newsfeedNotificationService.showSuccess('Changes successfully saved.');
    });
    return await this.modal.present();
  }

  deletePost() {
    this.newsfeedDataService.deletePost(this.post.id);
  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      cssClass: 'confirm-delete-post',
      header: 'Confirm Delete',
      message: 'Do you really wish to delete this post?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: async () => {
            this.deletePost();
            await this.newsfeedNotificationService.showSuccess('Post successfully deleted.');
          },
        },
      ],
    });

    await alert.present();
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { AlertController } from '@ionic/angular';
import { IPost } from 'src/app/interfaces/ipost';
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
    private newsfeedNotificationService: NewsfeedNotificationService,
  ) {}

  ngOnInit() {}
  ngOnDestroy() {}

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

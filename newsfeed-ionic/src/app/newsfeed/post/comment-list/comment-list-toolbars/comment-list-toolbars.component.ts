import { Component, OnInit, Input } from '@angular/core';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { AlertController } from '@ionic/angular';
import { NewsfeedNotificationService } from 'src/app/services/newsfeed-notification.service';

@Component({
  selector: 'app-comment-list-toolbars',
  templateUrl: './comment-list-toolbars.component.html',
  styleUrls: ['./comment-list-toolbars.component.scss'],
})
export class CommentListToolbarsComponent implements OnInit {
  @Input() postId = 0;
  @Input() commentId = 0;

  constructor(
    private newsfeedDataService: NewsfeedDataService,
    private alertController: AlertController,
    private newsfeedNotificationService: NewsfeedNotificationService,
  ) {}

  ngOnInit() {}

  editComment() {}

  deleteComment() {
    this.newsfeedDataService.deleteComment(this.postId, this.commentId);
  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      cssClass: 'confirm-delete-comment',
      header: 'Confirm Delete',
      message: 'Do you really wish to delete this comment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: async () => {
            this.deleteComment();
            await this.newsfeedNotificationService.showSuccess('Comment successfully deleted.');
          },
        },
      ],
    });

    await alert.present();
  }
}

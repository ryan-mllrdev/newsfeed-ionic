import { Component, OnInit, Input } from '@angular/core';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { AlertController } from '@ionic/angular';
import { NewsfeedFormComponent } from 'src/app/newsfeed/newsfeed-form/newsfeed-form.component';
import { Post } from 'src/app/models/post';
import { IPost } from 'src/app/interfaces/ipost';

@Component({
  selector: 'app-comment-list-toolbars',
  templateUrl: './comment-list-toolbars.component.html',
  styleUrls: ['./comment-list-toolbars.component.scss'],
})
export class CommentListToolbarsComponent implements OnInit {
  constructor(private newsfeedDataService: NewsfeedDataService, private alertController: AlertController) {}

  @Input() postId = 0;
  @Input() commentId = 0;

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
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteComment();
          },
        },
      ],
    });

    await alert.present();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { AlertController } from '@ionic/angular';
import { NewsfeedFormComponent } from '../../newsfeed-form/newsfeed-form.component';
import { IPost } from 'src/app/interfaces/ipost';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-newsfeed-post-toolbars',
  templateUrl: './newsfeed-post-toolbars.component.html',
  styleUrls: ['./newsfeed-post-toolbars.component.scss'],
})
export class NewsfeedPostToolbarsComponent implements OnInit {
  constructor(
    private newsfeedDataService: NewsfeedDataService,
    private alertController: AlertController,
    private newsfeedForm: NewsfeedFormComponent,
  ) {
    this.post = new Post();
  }

  @Input() post: IPost;

  ngOnInit() {}

  async editPost() {
    await this.newsfeedForm.showPostForm(this.post.id);
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
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deletePost();
          },
        },
      ],
    });

    await alert.present();
  }
}

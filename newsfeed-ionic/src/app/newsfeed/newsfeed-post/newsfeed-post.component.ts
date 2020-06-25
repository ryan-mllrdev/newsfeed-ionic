import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { AlertController } from '@ionic/angular';
import { NewsfeedFormComponent } from '../newsfeed-form/newsfeed-form.component';

@Component({
  selector: 'app-newsfeed-post',
  templateUrl: './newsfeed-post.component.html',
  styleUrls: ['./newsfeed-post.component.scss'],
})
export class NewsfeedPostComponent implements OnInit {
  constructor(
    private newsfeedDataService: NewsfeedDataService,
    private alertController: AlertController,
    private newsfeedForm: NewsfeedFormComponent,
  ) {
    this.post = newsfeedDataService.findPost(this.postId);
  }

  @Input() postId = 0;
  post: IPost;
  likes = 0;
  hearts = 0;
  smiles = 0;

  ngOnInit() {
    this.post = this.newsfeedDataService.findPost(this.postId);
  }

  getLikes(likes: number) {
    this.likes = likes;
  }
  getHearts(hearts: number) {
    this.hearts = hearts;
  }
  getSmiles(smiles: number) {
    this.smiles = smiles;
  }

  async editPost() {
    await this.newsfeedForm.showPostForm(this.postId);
  }

  deletePost() {
    this.newsfeedDataService.deletePost(this.postId);
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
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
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

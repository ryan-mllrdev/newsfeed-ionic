import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsfeedDataService } from 'src/app/services/newsfeed-data.service';
import { FormModalComponent } from './form-modal/form-modal.component';
import { IPost } from 'src/app/interfaces/ipost';

@Injectable({
  providedIn: 'platform',
})
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  modal: any;
  showModal = false;
  @Output() emitPostedToNewsfeed: EventEmitter<number> = new EventEmitter();

  constructor(private modalController: ModalController, private newsfeedDataService: NewsfeedDataService) {}

  ngOnInit() {}

  async showPostForm(id: number = 0) {
    this.showModal = true;
    this.modal = await this.modalController.create({
      component: FormModalComponent,
      cssClass: 'form-modal',
      showBackdrop: true,
      backdropDismiss: false,
      componentProps: {
        postId: id,
      },
    });
    this.modal.onDidDismiss().then((data: any) => {
      this.showModal = false;
      const post: IPost = data.data as IPost;
      this.emitPostedToNewsfeed.emit(post.id);
    });
    return await this.modal.present();
  }
}

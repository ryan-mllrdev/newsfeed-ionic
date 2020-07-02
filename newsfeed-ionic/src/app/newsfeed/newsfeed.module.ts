import { NgModule } from '@angular/core';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { IonicModule } from '@ionic/angular';

import { NewsfeedComponent } from '@rdr/newsfeed';
import { PostComponent } from '@rdr/post';
import { PostCommentComponent } from '@rdr/post-comment';
import { PostReactionComponent } from '@rdr/post-reaction';
import { PostToolbarsComponent } from '@rdr/post-toolbar';
import { PostFormComponent } from '@rdr/post-form';
import { FormModalComponent } from '@rdr/form-modal';
import { CommentListComponent } from '@rdr/comment-list';
import { CommentListToolbarsComponent } from '@rdr/comment-list-toolbar';
import { DistanceToNowPipe } from '@rdr/pipes/distance-to-now.pipe';
import { NewsfeedNotificationService } from '@rdr/services/newsfeed-notification.service';

@NgModule({
  imports: [CommonModule, IonicModule, Ng2SearchPipeModule, FormsModule, ReactiveFormsModule, OrderModule],
  declarations: [
    NewsfeedComponent,
    PostComponent,
    PostCommentComponent,
    PostReactionComponent,
    CommentListComponent,
    CommentListToolbarsComponent,
    PostToolbarsComponent,
    PostFormComponent,
    FormModalComponent,
    DistanceToNowPipe,
  ],
  exports: [NewsfeedComponent],
  providers: [NewsfeedNotificationService],
})
export class NewsfeedModule { }

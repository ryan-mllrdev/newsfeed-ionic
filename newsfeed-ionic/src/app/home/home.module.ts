import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
import { PostFormComponent } from '../newsfeed/post/post-form/post-form.component';
import { FormModalComponent } from '../newsfeed/post/post-form/form-modal/form-modal.component';

import { OrderModule } from 'ngx-order-pipe';
import { PostComponent } from '../newsfeed/post/post.component';
import { PostCommentComponent } from '../newsfeed/post/post-comment/post-comment.component';
import { PostReactionComponent } from '../newsfeed/post/post-reaction/post-reaction.component';
import { PostToolbarsComponent } from '../newsfeed/post/post-toolbars/post-toolbars.component';
import { CommentListToolbarsComponent } from '../newsfeed/post/comment-list/comment-list-toolbars/comment-list-toolbars.component';
import { CommentListComponent } from '../newsfeed/post/comment-list/comment-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NewsfeedNotificationService } from '../services/newsfeed-notification.service';
import { DistanceToNowPipe } from '../pipes/distance-to-now.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, HomePageRoutingModule, OrderModule, Ng2SearchPipeModule],
  declarations: [
    HomePage,
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
  providers: [NewsfeedNotificationService],
})
export class HomePageModule {}

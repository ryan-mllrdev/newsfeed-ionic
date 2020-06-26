import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
import { NewsfeedFormComponent } from '../newsfeed/newsfeed-form/newsfeed-form.component';
import { NewsfeedFormModalComponent } from '../newsfeed/newsfeed-form/newsfeed-form-modal/newsfeed-form-modal.component';

import { OrderModule } from 'ngx-order-pipe';
import { NewsfeedPostComponent } from '../newsfeed/newsfeed-post/newsfeed-post.component';
import { NewsfeedPostCommentComponent } from '../newsfeed/newsfeed-post/newsfeed-post-comment/newsfeed-post-comment.component';
import { NewsfeedPostReactionComponent } from '../newsfeed/newsfeed-post/newsfeed-post-reaction/newsfeed-post-reaction.component';
import { NewsfeedPostSummaryComponent } from '../newsfeed/newsfeed-post/newsfeed-post-summary/newsfeed-post-summary.component';
import { NewsfeedPostToolbarsComponent } from '../newsfeed/newsfeed-post/newsfeed-post-toolbars/newsfeed-post-toolbars.component';
import { CommentListToolbarsComponent } from '../newsfeed/newsfeed-post/newsfeed-post-comment-list/comment-list-toolbars/comment-list-toolbars.component';
import { NewsfeedPostCommentListComponent } from '../newsfeed/newsfeed-post/newsfeed-post-comment-list/newsfeed-post-comment-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, HomePageRoutingModule, OrderModule, Ng2SearchPipeModule],
  declarations: [
    HomePage,
    NewsfeedComponent,
    NewsfeedPostComponent,
    NewsfeedPostCommentComponent,
    NewsfeedPostReactionComponent,
    NewsfeedPostSummaryComponent,
    NewsfeedPostCommentListComponent,
    CommentListToolbarsComponent,
    NewsfeedPostToolbarsComponent,
    NewsfeedFormComponent,
    NewsfeedFormModalComponent,
  ],
})
export class HomePageModule {}

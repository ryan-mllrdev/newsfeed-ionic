import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
import { NewsfeedFormComponent } from '../newsfeed/newsfeed-form/newsfeed-form.component';
import { NewsfeedFormModalComponent } from '../newsfeed/newsfeed-form/newsfeed-form-modal/newsfeed-form-modal.component';

import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, OrderModule],
  declarations: [HomePage, NewsfeedComponent, NewsfeedFormComponent, NewsfeedFormModalComponent],
})
export class HomePageModule {}

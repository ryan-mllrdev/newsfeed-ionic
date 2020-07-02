import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { NewsfeedModule } from '@rdr/newsfeed-module';

@NgModule({
  imports: [CommonModule, NewsfeedModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}

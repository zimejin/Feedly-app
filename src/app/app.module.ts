import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material-module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { VideoPostComponent } from './components/video/video.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { HomeFeedComponent } from './home-feed/home-feed.component';

const components = [
  VideoPostComponent,
  PostsComponent,
  PhotoComponent,
  UserCardComponent,
];

@NgModule({
  declarations: [AppComponent, ...components, UserFeedComponent, HomeFeedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

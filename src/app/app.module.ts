import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material-module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FeedComponent } from './newsfeed/feed/feed.component';
import { PostsComponent } from './newsfeed/components/posts/posts.component';
import { VideoPostComponent } from './newsfeed/components/video/video.component';
import { PhotoComponent } from './newsfeed/components/photo/photo.component';

@NgModule({
  declarations: [AppComponent, UserCardComponent, FeedComponent, PostsComponent,  VideoPostComponent, PhotoComponent],
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

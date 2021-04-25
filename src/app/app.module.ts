import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material-module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserFeedComponent } from './pages/user-feed/user-feed.component';
import { HomeFeedComponent } from './pages/home-feed/home-feed.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  AppComponent,
  PostsComponent,
  UserCardComponent,
  UserFeedComponent,
  HomeFeedComponent,
  CreatePostComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

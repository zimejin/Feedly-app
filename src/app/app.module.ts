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
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalRequestHttpInterceptor } from './shared/interceptors/request-interceptor';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';

const components = [
  AppComponent,
  PostsComponent,
  UserCardComponent,
  UserFeedComponent,
  HomeFeedComponent,
  CreatePostComponent,
  UserAvatarComponent,
  HomeButtonComponent,
];

@NgModule({
  entryComponents: [...components],
  declarations: [...components],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalRequestHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
function userfeedReducer(
  arg0: {},
  userfeedReducer: any
):
  | any[]
  | import('@angular/core').Type<any>
  | import('@angular/core').ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

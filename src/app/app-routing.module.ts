import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeedComponent } from './home-feed/home-feed.component';
import { UserFeedComponent } from './user-feed/user-feed.component';

const routes: Routes = [
  {
    path: 'user-feed',
    component: UserFeedComponent,
  },
  {
    path: 'home-feed',
    component: HomeFeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

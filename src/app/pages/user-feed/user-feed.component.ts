import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FirestoreService } from '../../services/firestore.service';
import { Feeds } from '../../shared/models';
import { HomeFeedComponent } from '../home-feed/home-feed.component';

@Component({
  selector: 'app-user-feed',
  template: `
    <div class="content mat-elevation-z8">
      <!-- Create Post -->
      <span>
        <p>
          <app-create-post
            [parent]="form"
            [user]="utils?.currentUser"
            (newPost)="submitPost()"
            (favorite)="addToFavorite($event)"
          ></app-create-post>
        </p>
      </span>
      <!-- Create Post Ends -->
      <ng-container *ngFor="let feed of feeds | async; let i = index">
        <span>
          <p>
            <!-- NewsFeeds -->
            <app-post [post]="feed"></app-post>
          </p>
        </span>
      </ng-container>
    </div>
  `,
  styleUrls: ['./user-feed.component.scss'],
})
export class UserFeedComponent extends HomeFeedComponent implements OnInit {
  @Input()
  feeds!: Observable<Feeds[]>;

  constructor(
    firesStore: FirestoreService,
    fb: FormBuilder,
    utils: UtilitiesService
  ) {
    super(firesStore, fb, utils);
    this.feeds = this.firesStore.newsFeedAll();
    this.feeds.subscribe((state) => {
      console.log('user feeds => ', state);
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
}

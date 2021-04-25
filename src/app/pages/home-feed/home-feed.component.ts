import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../services/firestore.service';
import { Feeds } from '../../shared/models';

@Component({
  selector: 'app-home-feed',
  template: `
    <div class="content mat-elevation-z8">
      <!-- Create Post -->
      <span>
        <p>
          <app-create-post></app-create-post>
        </p>
      </span>
      <!-- Create Post Ends -->

      <!-- NewsFeeds -->
      <ng-container *ngFor="let feed of feeds | async; let i = index">
        <span>
          <p>
            <app-post [post]="feed"></app-post>
          </p>
        </span>
      </ng-container>
      <!-- NewsFeeds Ends -->
    </div>
  `,
  styleUrls: ['./home-feed.component.scss'],
})
export class HomeFeedComponent implements OnInit {
  @Input()
  feeds!: Observable<Feeds[]>;

  constructor(private firesStore: FirestoreService) {
    this.feeds = this.firesStore.newsFeedAll();
  }

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../services/firestore.service';
import { Feeds } from '../../shared/models';

@Component({
  selector: 'app-user-feed',
  template: `
    <div class="content mat-elevation-z8">
      <ng-container *ngFor="let feed of feeds | async">
        <span>
          <p>
            <app-post [post]="feed"></app-post>
          </p>
        </span>
      </ng-container>
    </div>
  `,
  styleUrls: ['./user-feed.component.scss'],
})
export class UserFeedComponent implements OnInit {
  @Input()
  feeds!: Observable<Feeds[]>;

  constructor(private fireStore: FirestoreService) {
    this.feeds = this.fireStore.newsFeedAll();
  }

  ngOnInit(): void {
    this.feeds.subscribe(state => {
      console.log('user feeds => ', state)
    })
  }
}

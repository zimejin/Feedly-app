import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../services/firestore.service';
import { Feeds } from '../../shared/models';

@Component({
  selector: 'app-home-feed',
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

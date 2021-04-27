import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { SharedStateService } from 'src/app/services/global-state.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FirestoreService } from '../../services/firestore.service';
import { Contacts, Feeds } from '../../shared/models/models';
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
export class UserFeedComponent
  extends HomeFeedComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input()
  feeds!: Observable<Feeds[]>;

  private subscription!: Subscription;
  private selectedContact!: Contacts;

  constructor(
    firesStore: FirestoreService,
    fb: FormBuilder,
    utils: UtilitiesService,
    private sharedState: SharedStateService,
    private router: Router
  ) {
    super(firesStore, fb, utils);
  }

  ngOnInit(): void {
    this.createForm();

    // Get the selected contact from theFeeds[] store
    this.subscription = this.sharedState.selectedContact.subscribe(
      (state) => (this.selectedContact = state)
    );
  }

  ngAfterViewInit() {
    // Load the selected user feeds
    this.getFeed();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getFeed() {
    console.log('Selected contact:', this.selectedContact);

    if (this.selectedContact) {
      this.feeds = (this.firesStore.getFeed(
        this.selectedContact.id
      ) as unknown) as Observable<Feeds[]>;
    } else {
      this.router.navigate(['/home-feed']);
    }
  }
}

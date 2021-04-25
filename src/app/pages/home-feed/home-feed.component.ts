import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
          <app-create-post
            [parent]="form"
            (newPost)="submitPost()"
            (favorite)="addToFavorite($event)"
          ></app-create-post>
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
  form!: FormGroup;

  constructor(
    protected firesStore: FirestoreService,
    protected fb: FormBuilder
  ) {
    this.feeds = this.firesStore.newsFeedAll();
  }

  ngOnInit(): void {
    this.createForm();
  }

  get message(): string {
    let control = this.form.get('message');
    if (control) return control.value as string;
    else return '';
  }

  body(): Feeds {
    return {
      message: this.message,
      user: 'Janae Randolph',
      time: '3 minutes ago',
      id: 1,
      photo: '',
      video: '',
    };
  }

  createForm() {
    this.form = this.fb.group({
      message: ['', [Validators.required]],
    });
  }

  addToFavorite(e: any) {
    console.log(e);
  }

  // Make request to submit the new post to firebase
  submitPost() {
    console.log('new post to firebase:', this.form.value);
    this.firesStore.addPost(this.body());
    this.form.reset();
  }
}

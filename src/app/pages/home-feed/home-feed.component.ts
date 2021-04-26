import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';
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
            [user]="utils?.currentUser"
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
    protected fb: FormBuilder,
    public utils: UtilitiesService
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
      time: Date.now(),
      id: 1,
      photo: '',
      video: '',
    };
  }

  createForm() {
    this.form = this.fb.group({
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(25),
          Validators.maxLength(300),
        ],
      ],
    });
  }

  addToFavorite(e: any) {
    console.log(e);
  }

  // Make request to submit the new post to firebase
  submitPost() {
    try {
      if (this.form.valid) {
        // new post to firebase
        this.firesStore.addPost(this.body());

        // Reset the form to it's initial state
        this.form.reset();
      } else {
        alert(
          'Please ensure your message is at least 25 characters long and less than 300 characters'
        );
      }
    } catch (error) {
      console.log(`Error occured while submiting`, error);
    }
  }
}

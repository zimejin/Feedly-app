import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Contacts } from 'src/app/shared/models/models';

@Component({
  selector: 'app-create-post',
  template: `
    <mat-card class="card">
      <form [formGroup]="parent">
        <mat-card-header>
          <div
            mat-card-avatar
            class="header-image"
            [ngStyle]="{ 'background-image': 'url(' + user?.avatar + ')' }"
          ></div>
          <mat-card-title>
            {{ user?.name }}
          </mat-card-title>
          <mat-card-subtitle *ngIf="relativeTime">
            {{ relativeTime }}
          </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <div class="card-body p-0 mt-3 position-relative">
            <figure class="avatar position-absolute ms-2 mt-1 top-5">
              <img
                [src]="user?.avatar"
                alt="image"
                class="shadow-sm rounded-circle w30"
              />
            </figure>
            <textarea
              formControlName="message"
              name="message"
              class="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
              cols="30"
              rows="10"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-fab color="accent">
            <mat-icon>thumb_up</mat-icon>
          </button>
          <button mat-fab color="warn">
            <mat-icon>favorite</mat-icon>
          </button>
          <button mat-fab (click)="newPost.emit()">
            <mat-icon>comment</mat-icon>
          </button>
        </mat-card-actions>
      </form>
    </mat-card>
  `,
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  @Input() parent!: FormGroup;
  @Input()
  user!: Contacts | undefined | null;

  // Event emitters
  @Output() favorite = new EventEmitter();
  @Output() comment = new EventEmitter();
  @Output() newPost = new EventEmitter();

  constructor(public utils: UtilitiesService) {}

  ngOnInit(): void {}

  get relativeTime() {
    if (this.user)
      return this.utils.timeSince(new Date(this.user.lastlogin as any));
  }
}

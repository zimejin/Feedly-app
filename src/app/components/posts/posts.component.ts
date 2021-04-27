import { Component, Input, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Feeds } from 'src/app/shared/models/models';

@Component({
  selector: 'app-post',
  template: `<mat-card class="card">
    <mat-card-header>
      <div
        mat-card-avatar
        class="header-image"
        [ngStyle]="{ 'background-image': 'url(' + post?.user?.avatar }"
      ></div>
      <mat-card-title *ngIf="post?.user">{{ post?.user?.name }} </mat-card-title>
      <mat-card-subtitle *ngIf="post?.time">
        {{ getRelativeTime(post) }}
      </mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      <a href="" class="video-btn" *ngIf="post?.video">
        <video autoplay="" loop="" class="video">
          <source [src]="post?.video" type="video/mp4" />
        </video>
      </a>
      <p class="post-text-content" *ngIf="post?.message">
        {{ post?.message }}
      </p>
      <div class="row" *ngIf="post?.photo">
        <div class="container">
          <a href="" data-lightbox="roadtr">
            <img [src]="post?.photo" class="image" alt="image" />
          </a>
        </div>
      </div>
    </mat-card-content>
    <mat-card-actions>
      <button mat-fab color="accent">
        <mat-icon>thumb_up</mat-icon>
      </button>
      <button mat-fab color="warn">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-fab>
        <mat-icon>comment</mat-icon>
      </button>
    </mat-card-actions>
  </mat-card> `,
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input()
  post!: Feeds;

  constructor(private utils: UtilitiesService) {}

  ngOnInit(): void {}

  getRelativeTime(feed: Feeds) {
    if (feed) return this.utils.timeSince(new Date(feed.time));
  }
}

import { Component, Input, OnInit } from '@angular/core';

export interface Feeds {
  type: string;
  photo?: string;
  post?: string;
  video?: string;
}
@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss'],
})
export class UserFeedComponent implements OnInit {
  @Input()
  feeds!: Feeds[];

  constructor() {}

  ngOnInit(): void {
    this.feeds = [
      {
        type: 'photo',
      },
      {
        type: 'text',
      },
      {
        type: 'text',
      },
      {
        type: 'video',
      },
    ];

    console.log(this.feeds);
    
  }
}

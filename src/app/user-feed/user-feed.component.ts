import { Component, Input, OnInit } from '@angular/core';
import { Feeds } from '../shared/models';

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
  }
}

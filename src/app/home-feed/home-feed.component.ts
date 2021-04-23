import { Component, Input, OnInit } from '@angular/core';
import { Feeds } from '../shared/models';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.scss'],
})
export class HomeFeedComponent implements OnInit {
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

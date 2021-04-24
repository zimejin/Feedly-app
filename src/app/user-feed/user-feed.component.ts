import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Feeds } from '../shared/models';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss'],
})
export class UserFeedComponent implements OnInit {
  @Input()
  feeds!: Feeds[];

  constructor(private fireStore:FirestoreService) {
    this.fireStore.getContacts()
  }

  ngOnInit(): void {
    this.feeds = [
      {
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
        video: 'http://uitheme.net/sociala/images/v-2.mp4',
        user: 'Janae Randolph',
        id: 1,
        time: '4 hours ago',
      },
      {
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
        user: 'Janae Randolph',
        id: 1,
        time: '3 hours ago',
      },

      {
        photo: 'http://uitheme.net/sociala/images/t-30.jpg',
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
        user: 'Janae Randolph',
        id: 1,
        time: '2 hours ago',
      },
      {
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
        user: 'Janae Randolph',
        id: 1,
        time: '1 hours ago',
      },
    ];
  }
}

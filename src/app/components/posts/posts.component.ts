import { Component, Input, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Feeds } from 'src/app/shared/models';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input()
  post!: Feeds;

  constructor(private utils: UtilitiesService) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Time since => ', this.utils.timeSince('1619464008973'));
    }, 5000);
  }

  get length(): number {
    return this.post.message.length;
  }

  getRelativeTime(oldtime: string) {
    if (oldtime) return this.utils.timeSince(oldtime);
  }
}

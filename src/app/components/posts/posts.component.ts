import { Component, Input, OnInit } from '@angular/core';
import { Feeds } from 'src/app/shared/models';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input()
  post!: Feeds;

  constructor() { }

  ngOnInit(): void {
  }

}

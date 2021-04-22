import { Component, Input, OnInit } from '@angular/core';

export interface User {
  name?: string;
  avatar?: string;
  status?: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User = {};
  constructor() {}

  ngOnInit(): void {}
}

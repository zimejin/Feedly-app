import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface User {
  name?: string;
  avatar?: string;
  status?: string;
}
@Component({
  selector: 'app-user-card',
  template: `
    <mat-card class="card" (click)="onClick.emit(user)">
      <mat-card-header>
        <div mat-card-avatar class="header-image" 
          [ngStyle]="{ 'background-image': 'url(' + user?.avatar + ')' }">
        </div>
        <mat-card-subtitle class="subtitle">
          {{ user?.status | titlecase }}
        </mat-card-subtitle>
        <mat-card-title class="title">
          {{ user?.name | titlecase }}
        </mat-card-title>
      </mat-card-header>
    </mat-card>
  `,
  styles: [
    `
      .card {
        /** max-width: 400px;  **/
        width: 100%;
        cursor: pointer;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        background: #002b5c;
        color: white;
        border-radius: 0px;
      }

      .header-image {
        background-size: cover;
      }

      mat-card-title.title {
        font-size: 0.7rem;
        color: white;
      }

      mat-card-subtitle.subtitle {
        color: white;
      }
    `,
  ],
})
export class UserCardComponent implements OnInit {
  @Input() user: User = {};
  @Output() onClick = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}
}

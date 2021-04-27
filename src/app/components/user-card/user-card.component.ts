import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacts } from 'src/app/shared/models/models';

@Component({
  selector: 'app-user-card',
  template: `
    <mat-card class="card" (click)="onClick.emit(user)">
      <mat-card-header>
        <div
          mat-card-avatar
          class="header-image"
          [ngStyle]="{ 'background-image': 'url(' + user?.avatar + ')' }"
        ></div>
        <mat-card-subtitle class="subtitle">
          {{ user?.name | titlecase }}
        </mat-card-subtitle>
        <mat-card-title class="title">
          {{ user?.status | titlecase }}
        </mat-card-title>
      </mat-card-header>
    </mat-card>
  `,
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input()
  user!: Contacts;
  @Output() onClick = new EventEmitter<Contacts>();

  constructor() {}

  ngOnInit(): void {}
}

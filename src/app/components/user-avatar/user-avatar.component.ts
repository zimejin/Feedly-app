import { Component, Input, OnInit } from '@angular/core';
import { Contacts } from 'src/app/shared/models/models';

@Component({
  selector: 'app-user-avatar',
  template: `
    <ng-container *ngIf="currentUser">
      <img class="avatar mat-elevation-z8" [src]="currentUser?.avatar" />
      <h4 class="name">{{ currentUser?.name }}</h4>
      <p class="designation">{{ currentUser?.status }}</p>
    </ng-container>
  `,
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  @Input()
  currentUser!: Contacts;

  constructor() {}

  ngOnInit(): void {}
}

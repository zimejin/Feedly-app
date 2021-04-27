import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-button',
  template: `
    <br />
    <br />
    <button
      mat-button
      class="menu-button"
      [routerLink]="['/home-feed']"
      routerLinkActive="router-link-active"
    >
      <mat-icon>home</mat-icon>
      <span>Newsfeed</span>
    </button>
  `,
  styleUrls: ['./home-button.component.scss'],
})
export class HomeButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

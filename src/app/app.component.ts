import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from './components/user-card/user-card.component';
import { Router } from '@angular/router';
import { FirestoreService } from './services/firestore.service';
import { Observable } from 'rxjs';
import { Contacts } from './shared/models';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header -->
    <mat-toolbar class="mat-elevation-z8">
      <button
        mat-icon-button
        *ngIf="sidenav.mode === 'over'"
        (click)="sidenav.toggle()"
      >
        <mat-icon *ngIf="!sidenav.opened"> menu </mat-icon>
        <mat-icon *ngIf="sidenav.opened"> close </mat-icon>
      </button>
      feedly
    </mat-toolbar>

    <!-- Sidebar -->
    <mat-sidenav-container>
      <mat-sidenav #sidenav="matSidenav" class="mat-elevation-z8">
        <ng-container *ngIf="currentUser">
          <img class="avatar mat-elevation-z8" [src]="currentUser?.avatar" />
          <h4 class="name">{{ currentUser?.name }}</h4>
          <p class="designation">{{ currentUser?.status }}</p>
        </ng-container>
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

        <div class="contact-list">
          <app-user-card
            [user]="contact"
            (onClick)="showFeed($event)"
            *ngFor="let contact of contacts | async"
          >
          </app-user-card>
        </div>
      </mat-sidenav>

      <!-- Main content -->
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  contacts!: Observable<Contacts[]>;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private firestore: FirestoreService
  ) {
    this.createUser();
  }

  ngOnInit() {
    this.contacts = this.firestore.getContacts();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  showFeed(user: User) {
    console.log(user);
    this.router.navigate(['./user-feed']);
  }

  get currentUser() {
    let user: string = window.localStorage.getItem('currentUser') || '';
    if (user) return JSON.parse(user);
  }

  createUser() {
    window.localStorage.setItem(
      'currentUser',
      JSON.stringify({
        name: 'Janae Randolph',
        id: 1,
        avatar:
          'https://images.unsplash.com/photo-1541710430735-5fca14c95b00?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        status: 'Available',
      })
    );
  }
}

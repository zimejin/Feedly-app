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
        <img
          class="avatar mat-elevation-z8"
          src="http://uitheme.net/sociala/images/user-12.png"
        />

        <h4 class="name">Jennifer Sharmila</h4>
        <p class="designation">@JennySharmila</p>
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
  ) {}

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
}

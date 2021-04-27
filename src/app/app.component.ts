import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { FirestoreService } from './services/firestore.service';
import { Observable, of } from 'rxjs';
import { Contacts } from './shared/models/models';
import { UtilitiesService } from './services/utilities.service';
import { SharedStateService } from './services/global-state.service';

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
        <!-- user-avatar  -->
        <app-user-avatar [currentUser]="currentUser"></app-user-avatar>

        <!-- home button element  -->
        <app-home-button></app-home-button>

        <div class="contact-list">
          <!-- contact list component  -->
          <app-user-card
            [user]="contact"
            (onClick)="showFeed($event)"
            *ngFor="let contact of contacts | async"
          >
          </app-user-card>
          <!-- contact list component end -->
        </div>
      </mat-sidenav>

      <!-- Main content -->
      <mat-sidenav-content>
        <!-- Router -->
        <router-outlet></router-outlet>
        <!-- Router End -->
      </mat-sidenav-content>
      <!-- Nav container end -->
    </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  contacts!: Observable<Contacts[]>;
  currentUser: any;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private utils: UtilitiesService,
    private firestore: FirestoreService,
    private sharedState: SharedStateService
  ) {
    this.createUser();
  }

  ngOnInit() {
    this.contacts = this.firestore.getContacts();
    this.currentUser = this.utils.currentUser;
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

  // Save state to observable,
  showFeed(user: Contacts) {
    // we can use Ngrx Store to save global state nut its out of scope for now
    this.sharedState.selectedContact = of(user);
    this.router.navigate(['./user-feed']);
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
        lastlogin: Date.now(),
      })
    );
  }
}

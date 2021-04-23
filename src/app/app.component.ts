import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from './components/user-card/user-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  contacts = [
    {
      name: '@WyattMorris',
      avatar: 'http://uitheme.net/sociala/images/user-8.png',
      status: 'Wyatt Morris',
    },
    {
      name: '@WyattMorris',
      avatar: 'http://uitheme.net/sociala/images/user-8.png',
      status: 'Wyatt Morris',
    },
    {
      name: '@WyattMorris',
      avatar: 'http://uitheme.net/sociala/images/user-8.png',
      status: 'Wyatt Morris',
    },
  ];

  constructor(private observer: BreakpointObserver, private router: Router) {}

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
    this.router.navigate(['./user-feed'])
  }
}

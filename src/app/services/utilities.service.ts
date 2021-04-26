import { Injectable } from '@angular/core';
import { Contacts } from '../shared/models/models';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  timeSince(timeStamp: any): any {
    let now: any = new Date();
    let secondsPast: string | number = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) {
      return parseInt(secondsPast as any) + 's';
    }
    if (secondsPast < 3600) {
      return parseInt((secondsPast / 60) as any) + 'm';
    }
    if (secondsPast <= 86400) {
      return parseInt((secondsPast / 3600) as any) + 'h';
    }
    if (secondsPast > 86400) {
      let day = timeStamp.getDate();
      let month = timeStamp
        .toDateString()
        .match(/ [a-zA-Z]*/)[0]
        .replace(' ', '');
      let year =
        timeStamp.getFullYear() == now.getFullYear()
          ? ''
          : ' ' + timeStamp.getFullYear();
      return day + ' ' + month + year;
    }
  }

  get currentUser(): Contacts | null {
    let user: string = window.localStorage.getItem('currentUser') || '';
    if (user) return JSON.parse(user);
    else return null;
  }
}

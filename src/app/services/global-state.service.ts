import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from '../shared/models/models';

@Injectable({
  providedIn: 'root',
})
export class SharedStateService {
  selectedContact = new Observable<Contacts>();

  constructor() {}
}

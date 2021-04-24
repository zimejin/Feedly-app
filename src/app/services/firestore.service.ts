import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Feeds } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // Fetch list of contacts
  getContacts() {
    let items = this.firestore.collection('contacts').valueChanges();

    items.subscribe((state) => {
      console.log('list of contacts:', state);
    });
    return this.firestore.collection('contacts').valueChanges();
  }

  // Returns the news feeds for all contacts
  newsFeedAll(): Observable<Feeds[]> {
    return this.firestore.collection('feeds').valueChanges() as Observable<
      Feeds[]
    >;
  }

  // Fetch user feed using user id
  getFeed(id: number) {
    return;
  }

  // Upload items to feed using unique ID
  addFeed(id: number, data: any) {
    return;
  }
}

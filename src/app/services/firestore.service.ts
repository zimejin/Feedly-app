import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contacts, Feeds } from '../shared/models/models';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // Fetch list of contacts
  getContacts(): Observable<Contacts[]> {
    return this.firestore.collection('contacts').valueChanges() as Observable<
      Contacts[]
    >;
  }

  // Returns the news feeds for all contacts
  newsFeedAll(): Observable<Feeds[]> {
    const feeds = this.firestore.collection('feeds').valueChanges();
    return feeds as Observable<Feeds[]>;
  }

  // Fetch user feed using user id
  getFeed(id: number): Observable<Feeds[]> {
    const feeds = this.firestore.collection('feeds');
    return (this.firestore.collection('feeds', (ref) =>
      ref.where('id', '==', id)
    ) as unknown) as Observable<Feeds[]>;
  }

  // Upload items to feed using unique ID
  addFeed(id: number, data: any) {
    return;
  }

  // Add new feed. Video, Photo, Text from the app
  addPost(data: any) {
    if (!data) return;
    return this.firestore.collection('feeds').add(data);
  }
}

/*

  Firestore operations, which does not use the http client from Angular. So the requests can not be intercepted.

*/

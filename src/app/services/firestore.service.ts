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
  getFeed(id: number) {
    return this.firestore
      .collection('feeds', (ref) => ref.where('id', '==', id))
      .snapshotChanges();
  }

  // Add new feed. Video, Photo, Text from the app
  addPost(data: any) {
    if (!data) return;
    return this.firestore.collection('feeds').add(data);
  }
}

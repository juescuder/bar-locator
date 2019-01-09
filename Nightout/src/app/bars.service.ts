import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  ref = firebase.firestore().collection('Bars');

  constructor() { }

  getBars(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let bars = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          bars.push({
            id: doc.id,
            name: data.Name,
            location: data.Location,
            address: data.Address
          });
        });
        observer.next(bars);
      });
    });
  }
  
  getBar(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        console.log(data);
        observer.next({
          id: doc.id,
          name: data.Name,
          location: data.Location
        });
      });
    });
  }

}

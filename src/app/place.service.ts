import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  ref = firebase.firestore().collection('Bars');

  constructor() { }
  
  getPlace(type: string, id: string): Observable<any> {

    this.ref = firebase.firestore().collection(type);

    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        console.log(data);
        observer.next({
          id: doc.id,
          name: data.Name,
          location: data.Location,
          address: data.Address
        });
      });
    });
  }

  getPlacesList(type: string): Observable<any> {

    this.ref = firebase.firestore().collection(type);

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

  getPlacesByKeyword(type: string, keyword: string): Observable<any> {

    this.ref = firebase.firestore().collection(type);

    /*.orderByChild('_searchLastName')
                 .startAt(keyword)
                 .endAt(keyword+"\uf8ff")*/

    //this.ref.orderBy('Name').startAt(keyword).endAt(keyword+"\uf8ff").onSnapshot(querySnapshot) => {
    //this.ref.onSnapshot((querySnapshot) => {

    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let bars = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();

          console.log(data.Name.toLowerCase() + ' <=> ' + keyword);

          if(data.Name.toLowerCase().includes(keyword.toLowerCase()))
          {
            bars.push({
              id: doc.id,
              name: data.Name,
              location: data.Location,
              address: data.Address
            });
          }
        });
        observer.next(bars);
      });
    });
  }


}

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: 'AIzaSyDqdEokWohGzemYH_vvzexkdSp3Z-GZaMM',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'https://nightout-62bf5.firebaseio.com',
  projectId: 'nightout-62bf5',
  storageBucket: 'YOUR_STORAGE_BUCKET',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Night Out!';

  ngOnInit(){
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}

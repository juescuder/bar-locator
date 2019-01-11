import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  place$ = Object;
  placeId$ = String;
  type$ = String;

  constructor(private data: PlaceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.placeId$ = params['id'];

      this.data.getPlace('Bars', this.placeId$.toString()).subscribe(
        data => {
          this.place$ = data;
        }
      )
   });
  }

}

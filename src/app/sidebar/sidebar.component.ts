import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  placesList$: Object;  
  selected$: Object;
  type$: string;

  constructor(private data: PlaceService, private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.type$ = params['type'];

      this.data.getPlacesList(this.type$).subscribe(
        data => {
          this.placesList$ = data;
          this.selected$ = data[0];
        }
      )


   });
  }

  selectBar(placeId: string){
    console.log(placeId, this.type$);
    this.data.getPlace(this.type$, placeId).subscribe(
      data => this.selected$ = data
    )

  }
}

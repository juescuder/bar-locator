import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword$ = String;
  results$ = null;

  constructor(private data: PlaceService) { }

  ngOnInit() {
  }

  search(value: string){
    console.log(value);

    this.data.getPlacesByKeyword('Bars', value).subscribe(
      data => {
        console.log(data.length);
        this.results$ = data;
      }
    )
  }

}

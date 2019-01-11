import { Component, OnInit, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PlaceComponent } from '../place/place.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() places: SidebarComponent;
  @Input() place: PlaceComponent;

  constructor() {}
  
  ngOnInit() {
  }

}

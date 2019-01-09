import { Component, OnInit, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BarsService } from '../bars.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() bars: SidebarComponent;

  constructor(private data: BarsService) {}
  
  ngOnInit() {

    console.log(this.bars.barSelected$);
  }

}

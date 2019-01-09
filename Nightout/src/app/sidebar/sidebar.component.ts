import { Component, OnInit } from '@angular/core';
import { BarsService } from '../bars.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  barsList$: Object;  
  barSelected$: Object;

  constructor(private data: BarsService) { }

  ngOnInit() {
    this.data.getBars().subscribe(
      data => {
        this.barsList$ = data;
        this.barSelected$ = data[0];
      }
    )
  }

  selectBar(barId: string){
    console.log(barId);
    this.data.getBar(barId).subscribe(
      data => this.barSelected$ = data
    )

  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NearestComponent } from './nearest/nearest.component';
import { MapComponent } from './map/map.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nearest',
    component: NearestComponent
  },
  {
    path: 'single/:id',
    component: SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

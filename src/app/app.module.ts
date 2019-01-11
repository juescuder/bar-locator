import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NearestComponent } from './nearest/nearest.component';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaceComponent } from './place/place.component';
import { SingleComponent } from './single/single.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    HomeComponent,
    NearestComponent,
    MapComponent,
    SidebarComponent,
    PlaceComponent,
    SingleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqdEokWohGzemYH_vvzexkdSp3Z-GZaMM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

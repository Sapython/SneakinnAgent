import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { Header1Component } from './header1/header1.component';
import { MapsComponent } from './maps/maps.component';
// import { AgmCoreModule } from '@agm/core';


const widgets = [
  HeaderComponent,
  Header1Component,
  MapsComponent
]

@NgModule({
  declarations: [
    HeaderComponent,
    Header1Component,
    MapsComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    // AgmCoreModule.forRoot({
    //   apiKey:'REPLACEMENT_STRING'
    // })
  ],
  exports: widgets
})
export class WidgetsModule { }

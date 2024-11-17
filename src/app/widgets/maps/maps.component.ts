import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent  implements OnInit {

  lat=26.9124; 
  lng=75.7873;
  constructor() { }

  ngOnInit() {}

}

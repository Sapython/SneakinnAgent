import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

 
  
  name = 'Delivery';

  items = [
    {
      imgSource: 'assets/icon/delivery/shoe.png',
      name: 'AIr Jordan',
      id: 101,
      category: 'shoe',
      qty: 2
    },
    {
      imgSource: 'assets/icon/delivery/bag.svg',
      name: 'Gucci Leather Bag',
      id: 102,
      category: 'shoe',
      qty: 1
    }
  ];

  
  constructor() { }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryPageRoutingModule } from './delivery-routing.module';

import { DeliveryPage } from './delivery.page';
import { WidgetsModule } from '../widgets/widgets.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPageRoutingModule,
    WidgetsModule,
    ModalModule
  ],
  declarations: [DeliveryPage]
})
export class DeliveryPageModule {}

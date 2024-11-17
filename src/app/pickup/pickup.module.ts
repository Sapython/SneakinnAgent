import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupPageRoutingModule } from './pickup-routing.module';

import { PickupPage } from './pickup.page';
import { WidgetsModule } from '../widgets/widgets.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupPageRoutingModule,
    WidgetsModule,
    ModalModule
  ],
  declarations: [PickupPage]
})
export class PickupPageModule {}

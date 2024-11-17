import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  
  constructor() { }

  ngOnInit() {}

  // @ViewChild(IonModal) modal!: IonModal;
  // closeModal(){
  //   this.modal.dismiss(null, 'cancel');
  // }

   isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}

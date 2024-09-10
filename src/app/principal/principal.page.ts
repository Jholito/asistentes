import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  
  openMenu() {
    this.menu.open();
  }

  isJustificationModalOpen = false;
  alertButtons = ['OK'];

  openJustificationModal() {
    this.isJustificationModalOpen = true;
  }

  closeJustificationModal() {
    this.isJustificationModalOpen = false;
  }

  enviar() {
    // Implementa aquí la lógica para enviar la justificación
    this.isJustificationModalOpen = false;
  }
}


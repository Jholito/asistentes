import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generar-codigo',
  templateUrl: './generar-codigo.page.html',
  styleUrls: ['./generar-codigo.page.scss'],
})
export class GenerarCodigoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  isQRCodeModalOpen = false;

  openQRCodeModal() {
    this.isQRCodeModalOpen = true;
  }

  async closeQRCodeModal() {
    // Cerrar el modal
    if (this.isQRCodeModalOpen) {
      this.isQRCodeModalOpen = false;
      await this.delay(1);
      this.redirectToHomePage();
    }
  }

  redirectToHomePage() {
    this.navCtrl.navigateRoot('/principal'); // Redirige a la página principal
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

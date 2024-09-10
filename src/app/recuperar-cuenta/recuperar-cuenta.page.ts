import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.page.html',
  styleUrls: ['./recuperar-cuenta.page.scss'],
})
export class RecuperarCuentaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  enviarEmail(){
    this.navCtrl.navigateForward('/inicio');
  }

}

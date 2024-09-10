import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/principal', icon: 'home' },
    { title: 'Perfil Alumno', url: '/perfil', icon: 'person' },
  ];
  constructor() {}
}

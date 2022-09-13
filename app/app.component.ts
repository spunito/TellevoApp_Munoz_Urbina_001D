import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    {
      icon: 'car-sharp',
      name: 'Viajes',
      redirecTo: '/card'
    },
    {
      icon: 'person-sharp',
      name: 'Somos',
      redirecTo: '/somos'
    },
    
    {
      icon: 'home-sharp',
      name: 'Cerrar sesion',
      redirecTo: '/inicio'
    },   
  ];
  



}

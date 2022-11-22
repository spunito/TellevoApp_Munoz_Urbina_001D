import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

interface Componente2{
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
  constructor(private navController: NavController ) {}


  componentes: Componente[] = [ 
    {
      icon: 'car-sharp',
      name: 'Viajes',
      redirecTo: '/inicio'
    },
    {
      icon: 'person-sharp',
      name: 'Somos',
      redirecTo: '/somos'
    },
    {
      icon: 'speedometer-sharp',
      name: 'Conductores',
      redirecTo: '/conduc'
    },
  ];

  componentes2: Componente2[] = [ 
    {
      icon: 'car-sharp',
      name: 'Inicio',
      redirecTo: '/inicio-c'
    },
     
  ];

  title = 'Como usar el Componente Google Maps de Angular 9'; 
 
    // Configuración de Google Maps 
    position = {
      lat: -33.5119215, 
      lng:-70.7519261
    };
    label = {
      color: 'red',
      text :'Marcardor'
    };
    
    Logout(){
      localStorage.removeItem('ingresado');
      this.navController.navigateRoot('login');
    }
    




}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


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
    }

      
  
    // {
    //   icon: 'wifi-outline',
    //   name: 'Inicio',
    //   redirecTo: '/inicio',
    // },
    // {
    //   icon: 'eye-outline',
    //   name: 'Noticias',
    //   redirecTo:'/noticias',
    // },
    // {
    //   icon: 'diamond-outline',
    //   name: 'Comentarios',
    //   redirecTo:'/comentarios',
    // }, 
    // {
    //   icon: 'person-outline',
    //   name: 'Mascotas',
    //   redirecTo:'/datos',
    // },
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

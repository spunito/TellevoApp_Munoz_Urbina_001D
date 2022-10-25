import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [

    {
      icon: 'pizza-sharp',
      name: 'PizzaHut Plaza de Maipú', 
      redirecTo: '#'
    },
    {
      icon: 'school-sharp',
      name: 'DuocUc Maipú',
      redirecTo: '#'
    }
    

  ];

  constructor(private menuController: MenuController,
              private navController: NavController) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  
  position = {
    lat: -33.5111993, 
    lng:-70.752668
  };
  label = {
    color: 'red',
    text :'Marcardor'
  };

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
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

  constructor(private menuController: MenuController) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

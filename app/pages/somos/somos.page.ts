import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-somos',
  templateUrl: './somos.page.html',
  styleUrls: ['./somos.page.scss'],
})
export class SomosPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

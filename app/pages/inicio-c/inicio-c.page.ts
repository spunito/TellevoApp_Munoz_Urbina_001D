import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-c',
  templateUrl: './inicio-c.page.html',
  styleUrls: ['./inicio-c.page.scss'],
})
export class InicioCPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  Logout(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
  }

  position = {
    lat: -33.5104587, 
    lng:-70.7583072
  };
  label = {
    color: 'red',
    text :'Marcardor'
  };
}

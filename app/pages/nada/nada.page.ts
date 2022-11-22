import { Component, OnInit } from '@angular/core';

interface Componente2{
  icon:string;
  name:string;
  redirecTo:string;
}
@Component({
  selector: 'app-nada',
  templateUrl: './nada.page.html',
  styleUrls: ['./nada.page.scss'],
})
export class NadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  componentes2: Componente2[] = [ 
    {
      icon: 'car-sharp',
      name: 'Inicio',
      redirecTo: '/inicio-c'
    },
     
  ];

}

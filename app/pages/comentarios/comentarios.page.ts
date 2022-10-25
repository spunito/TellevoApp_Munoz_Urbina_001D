import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComentariosService } from '../../services/comentarios.service'

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  comentarios : any;

  constructor(private menuController: MenuController,
              private comentariosService: ComentariosService) { }
    

  ngOnInit() {
    this.comentariosService.getTopComments().subscribe(resp => {
      console.log('comentarios', resp);
      this.comentarios = resp;
    })
  }


  mostrarMenu()
  {
    this.menuController.open('first');
  }



}

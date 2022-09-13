import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})

export class AlertPage implements OnInit {

  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  //método que muestra un mensaje con botón Ok
  async Saludo() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      message: 'Bienvenid@ a mi App',
      buttons: ['OK'],
    });

    await alert.present();
  }

  //método que muestra mensaje con dos botones de acción
  async Consulta() {
    const alert = await this.alertController.create({
      header: 'Quieres ir almorzar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'El usuario no quiere ir almorzar';
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'El usuario tiene cualquier hambre';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  //método que ingresa datos 
  async Inputs() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 cáracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Cuéntanos acerca de ti..',
        },
      ],
    });

    await alert.present();
  }


}

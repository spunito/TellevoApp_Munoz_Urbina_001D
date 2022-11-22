import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor(private registroService: RegistroserviceService,
              private alertController: AlertController, 
              private toastController: ToastController,
              private fb:FormBuilder) { 
                  this.formularioRegistro = this.fb.group({
                      'nombre': new FormControl("", Validators.required),
                      'correo': new FormControl("", Validators.required),
                      'tipo': new FormControl("", Validators.required),
                      'password': new FormControl("", Validators.required),
                      'confirmaPass': new FormControl("", Validators.required)
            });
          }


  ngOnInit() {
  }

  async CrearUsuario(){
    //console.log('Guardar');
   var form= this.formularioRegistro.value;
   if (this.formularioRegistro.invalid ){
       const alert = await this.alertController.create({
         header: 'Datos Incompletos',
         message: 'Debe completar todos los datos',
         buttons: ['Aceptar'],
       });
   
       await alert.present();
       return;
     }

     this.newUsuario.nomUsuario = form.nombre,
     this.newUsuario.correoUsuario = form.correo;
     
     //Tipo de usuario validacion
     if(form.tipo != "Conductor" && form.tipo != "Pasajero"
     && form.tipo != "pasajero" && form.tipo != "conductor" && form.tipo != "p"
     && form.tipo != "c" )
     {
      this.formularioRegistro.invalid;
      const alerta = await this.alertController.create({
        header: 'Tipo Incorrecto',
        message: 'Debe poner si es Conductor o Pasajero',
        buttons: ['Aceptar'],
      });
  
      await alerta.present();
      return;
        
      }
      else
      { 
        this.newUsuario.tipoUsuario = form.tipo;
      }
     

      //Contraseña Validacion
     if(form.password != form.confirmaPass)
     {
      this.formularioRegistro.invalid;
      const alerta = await this.alertController.create({
        header: 'Contraseña incorrecta',
        message: 'La contraseña debe ser la misma',
        buttons: ['Aceptar'],
      });
  
      await alerta.present();
      return;
        
      }
      else
      { 
        this.newUsuario.passUsuario=form.password, 
        this.newUsuario.repassUsuario=form.confirmaPass
      }
      
     this.registroService.addDatos(this.newUsuario).then(dato => { 
       this.newUsuario = <Usuario>{};
       this.showToast('Registrado correctamente.');  
     }); 
 }



 async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 2000
  });
  toast.present();
}

}

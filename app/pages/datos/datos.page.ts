import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicedatosService, Datos } from '../../services/servicedatos.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  datos : Datos[] = [];
  formulario: FormGroup;
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private menuController: MenuController, 
              private serviceDatos: ServicedatosService, 
              private plt: Platform, 
              private toastController: ToastController,
              private placesService :PlacesService ) {
                
                  
                  this.formulario = new FormGroup({
                    name: new FormControl(),
                    auto: new FormControl(),
                    cantidadasid: new FormControl(),
                    parada: new FormControl(),
                    
                  });
                  
                
               }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      console.log(places);
    })
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.placesService.addPlace(this.formulario.value);
    console.log(response);
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  //invocamos al método getDatos() del servicio
  loadDatos(){
    this.serviceDatos.getDatos().then(datos=>{ 
      this.datos = datos;
    })
  }

  //creamos un objeto del tipo interface Datos, invocamos al método del servicio
  addDatos(){
    this.newDato.modified=Date.now();
    this.newDato.id=Date.now();
    this.serviceDatos.addDatos(this.newDato).then(dato => { 
      this.newDato = <Datos>{};
      this.showToast('Datos Agregados!');
      this.loadDatos();
    })
  }

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    toast.present();
  }

   //update
   updateDatos(dato: Datos ){
    dato.nomMascota = `UPDATED: ${dato.nomMascota}`;
    dato.modified = Date.now();
    this.serviceDatos.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } 

  //delete
  deleteDatos(dato: Datos){
    this.serviceDatos.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }




}

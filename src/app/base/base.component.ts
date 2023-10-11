import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Datos } from '../datos';
import { ManejadorService } from '../manejador.service';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

@Component({
  selector: 'app-base',
  standalone:true,
  imports:[CommonModule, TarjetaComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filtrar por nombre del jugador..." #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <br>
  <form>
    <h2>Agregar jugadores</h2>
    <br>
      <input type="text" placeholder="Ingrese nombre" #name>
      <br>
      <input type="text" placeholder="Ingrese ciudad" #city>
      <br>
      <input type="text" placeholder="Ingrese posicion" #posicion>
      <button class="primary" type="button" (click)="ingresarJugador(name.value,city.value,posicion.value)">Ingresar</button>
    </form>
  <section class="results">
    <app-tarjeta
      *ngFor="let tarjeta of listaFiltrada"
      [datos]="tarjeta">
    </app-tarjeta>
  </section>
`,
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  listaDatos: Datos[] = [];
  manejadorService: ManejadorService = inject(ManejadorService);
  listaFiltrada:Datos[]=[];
  ID:number;
  

  constructor() {
    this.listaDatos = this.manejadorService.getDatos();
    this.listaFiltrada=this.listaDatos;
    this.ID=5;
    
    
  }

  filterResults(text: string) {
    if (!text) {
      this.listaFiltrada = this.listaDatos;
    }
  
    this.listaFiltrada = this.listaDatos.filter(
      datos => datos?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  ingresarJugador(nombre:string, ciudad:string,posicion:string){
    if(this.ID<22){
      this.ID=this.ID+1;
    let nuevoJugador:any ={
      name:nombre,
      city:ciudad,
      posicion:posicion,
      id:this.ID,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQOWcylgON9kuRegMqj4WKlrLRaHgd_5kZA&usqp=CAU"
    }
    console.log(nuevoJugador)
    this.listaDatos.push(nuevoJugador);  
    }else{
      alert("La lista esta llena")
    }
    
    
  }

}

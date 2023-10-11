import { Injectable } from '@angular/core';
import { Datos } from './datos';

@Injectable({
  providedIn: 'root'
})
export class ManejadorService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected datos: Datos[] = [
    {
      id: 0,
      name: 'Jose Rodriguez',
      city: 'Montevideo',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      posicion:"DELANTERO"
    },
    {
      id: 1,
      name: 'Luis Fernandez',
      city: 'Salto',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      posicion:"MEDIOCAMPISTA"
    },
    {
      id: 2,
      name: 'Santiago Mendez',
      city: 'Canelones',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      posicion:"DELANTERO"
    },
    {
      id: 3,
      name: 'Jonatan Crack',
      city: 'Artigas',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      posicion:"DEFENSA"
      
    },
    {
      id: 4,
      name: 'Armando Paredes',
      city: 'Montevideo',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      posicion:"GOLERO"
    },
    {
      id: 5,
      name: 'Luis Suarez',
      city: 'Salto',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      posicion: "DELANTERO"
      
    },
  ];

  getDatos(): Datos[] {
    return this.datos;
  }

  getDatosById(id: number): Datos | undefined {
    return this.datos.find(datos => datos.id === id);
  }
}
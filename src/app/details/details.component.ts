import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManejadorService } from '../manejador.service';
import { Datos } from '../datos';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article>
    <img class="listing-photo" [src]="datos?.photo"
      alt="Foto del jugador {{datos?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{datos?.name}}</h2>
      <p class="listing-location">{{datos?.city}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">Acerca de este jugador:</h2>
      <h3>-> Destacado jugador perteneciente a la ciudad de {{datos?.city}}</h3>
      <br>
      <h3>{{datos?.name}} es un increíble jugador que va a representar a nuestro país en la siguiente convocatoria</h3>
      <br>
      <h3>Su posición natural es {{datos?.posicion}}, pero veremos donde el técnico considera utilizarlo en el partido...</h3>
    </section>
  </article>
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
    manejadorService = inject(ManejadorService);
    datos: Datos | undefined;
  
    constructor() {
      const Identificador = Number(this.route.snapshot.params['id']);
      this.datos = this.manejadorService.getDatosById(Identificador);
    }

}

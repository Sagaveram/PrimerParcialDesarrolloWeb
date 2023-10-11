import { Component } from '@angular/core';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaseComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <h1>Lista de convocados</h1>
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'titulo';
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <!-- <h1>{{ title }}</h1> -->
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
      <!-- <app-home></app-home> -->
    </section>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!';
}
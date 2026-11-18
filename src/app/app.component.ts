import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ChefsComponent } from './chefs/chefs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ChefsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

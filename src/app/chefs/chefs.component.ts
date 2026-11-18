import { Component, OnInit, inject, signal } from '@angular/core';
import { Chef } from '../models/chef';
import { ChefService } from '../services/chef.service';

@Component({
  selector: 'app-chefs',
  standalone: true,
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent implements OnInit {
  private readonly chefService = inject(ChefService);

  readonly chefs = signal<Chef[]>([]);
  readonly loading = signal(true);
  readonly error = signal(false);

  ngOnInit(): void {
    this.chefService.getChefs().subscribe({
      next: (data) => {
        this.chefs.set(data ?? []);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        console.error('Nem sikerült letölteni a szakácsok adatait:', error);
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  berel(chef: Chef): void {
    window.alert(`Kiválasztott szakács: ${chef.name}`);
  }
}

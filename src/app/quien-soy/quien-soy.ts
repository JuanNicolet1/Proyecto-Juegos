import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Nav } from '../Componentes/nav/nav';

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [CommonModule, Nav],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css'
})
export class QuienSoy {
  userData: any = null;
  githubUsername: string = 'JuanNicolet1';
  loading: boolean = true;
  error = '';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.getUserData();
  }

  ngOnInit() {
    this.getUserData(); 
  }

  getUserData() {
    this.loading = true;
    const url = `https://api.github.com/users/${this.githubUsername}`;
    this.http.get(url).subscribe({
      next: (data) => {
        this.userData = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar el post');
        this.error = 'Error al cargar el post';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}

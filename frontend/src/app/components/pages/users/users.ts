import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  newUser = {
    name: '',
    email: '',
    password: '',
   
  };

  message = '';
  error = '';

  private readonly http = inject(HttpClient);

  createUser() {
    this.message = '';
    this.error = '';

    this.http.post<any>('http://localhost:3000/users', this.newUser)
      .subscribe({
        next: (res) => {
          this.message = 'Usuario creado correctamente';

          // 🔥 resetear formulario
          this.newUser = {
            name: '',
            email: '',
            password: '',
           
          };
        },
        error: (err) => {
          console.log('ERROR CREATE USER', err);
          this.error = err?.error?.message || 'Error al crear usuario';
        }
      });
  }
}
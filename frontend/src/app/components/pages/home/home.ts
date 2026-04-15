import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  email = '';
  password = '';
  error = '';

  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  onSubmit() {
    this.error = '';

    this.http.post('http://localhost:3000/login', {
      email: this.email,
      password: this.password,
    }).subscribe({
      next: (res: any) => {
        
        this.router.navigateByUrl('/usuarios', { replaceUrl: true });
      },
      error: (err) => {
        console.log('ERROR LOGIN', err);
        this.error = 'Credenciales incorrectas';
        this.cdr.detectChanges();
      },
    });
  }
}



import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 
  private readonly router = inject(Router);

  get user() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

 
}

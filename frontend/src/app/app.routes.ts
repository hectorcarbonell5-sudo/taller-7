import { Routes } from '@angular/router';

import { Home } from './components/pages/home/home';
import { Users } from './components/pages/users/users';

export const routes: Routes = [
  { path: 'inicio', component: Home, title: "Inicio" },
  { path: 'usuarios', component: Users, title: "Usuarios" },
  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  
];

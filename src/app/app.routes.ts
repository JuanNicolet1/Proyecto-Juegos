import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Home } from './bienvenida/home/home';
import { QuienSoy } from './quien-soy/quien-soy';

export const routes: Routes = [
    {path: '', component: Registro},
    {path: 'registro', component: Registro},
    {path: 'login', component: Login},
    {path: 'bienvenida/home', component: Home},
    {path: 'quien-soy', component: QuienSoy},
];

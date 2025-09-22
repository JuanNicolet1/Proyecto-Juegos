import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Home } from './bienvenida/home/home';
import { QuienSoy } from './quien-soy/quien-soy';
import { AccesoRapido } from './login/acceso-rapido/acceso-rapido';
import { AuthGuard } from './guards/auth.guard';
import { UssaveChangesGuard } from './guards/ussave-changes.guard';
import { TaskResolver } from './guards/tasks.resolver';
import { MayorMenor } from './bienvenida/home/juegos/mayor-menor/mayor-menor';

export const routes: Routes = [
    {path: '', redirectTo: 'registro', pathMatch: 'full'},
    {
        path: 'registro', 
        loadComponent: () => import("./registro/registro").then(m => m.Registro)
    },
    {
        path: 'login', 
        loadComponent: () => import("./login/login").then(m => m.Login)
    },
    {
        path: 'bienvenida/home', 
        loadComponent: () => import("./bienvenida/home/home").then(m => m.Home),
        canActivate: [AuthGuard]
    },
    {
        path: 'juegos/mayor-menor',
        loadComponent: () => import("./bienvenida/home/juegos/mayor-menor/mayor-menor").then(m => m.MayorMenor),
        canActivate: [AuthGuard]
    },
    {
        path: 'juegos/ahorcado',
        loadComponent: () => import("./bienvenida/home/juegos/ahorcado/ahorcado").then(m => m.Ahorcado),
        canActivate: [AuthGuard]
    },
    {path: 'quien-soy', component: QuienSoy},
    {path: 'acceso-rapido/acceso-rapido', component: AccesoRapido},
];

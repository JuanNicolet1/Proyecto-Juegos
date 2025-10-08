import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { Home } from './bienvenida/home/home';
import { QuienSoy } from './quien-soy/quien-soy';
import { AccesoRapido } from './login/acceso-rapido/acceso-rapido';
import { AccesoRapidoRoles } from './login/acceso-rapido-roles/acceso-rapido-roles';
import { AuthGuard } from './guards/auth.guard';
import { EdadGuard } from './guards/edad.guard';
import { UssaveChangesGuard } from './guards/ussave-changes.guard';
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
    {
        path: 'juegos/preguntados',
        loadComponent: () => import("./bienvenida/home/juegos/preguntados/preguntados").then(m => m.Preguntados),
        canActivate: [AuthGuard]
    },
    {
        path: 'juegos/batalla-naval',
        loadComponent: () => import("./bienvenida/home/juegos/batalla-naval/batalla-naval").then(m => m.BatallaNaval),
        canActivate: [AuthGuard]
    },
    {
        path: 'ranking-mm',
        loadComponent: () => import("./bienvenida/home/juegos/mayor-menor/ranking-mm/ranking-mm").then(m => m.RankingMm),
        canActivate: [AuthGuard]
    },
    {
        path: 'ranking-ahorcado',
        loadComponent: () => import("./bienvenida/home/juegos/ahorcado/ranking-ahorcado/ranking-ahorcado").then(m => m.RankingAhorcado),
        canActivate: [AuthGuard]
    },
    {
        path: 'ranking-preguntados',
        loadComponent: () => import("./bienvenida/home/juegos/preguntados/ranking-preguntados/ranking-preguntados").then(m => m.RankingPreguntados),
        canActivate: [AuthGuard]
    },
    {
        path: 'ranking-bn',
        loadComponent: () => import("./bienvenida/home/juegos/batalla-naval/ranking-bn/ranking-bn").then(m => m.RankingBn),
        canActivate: [AuthGuard]
    },
    {path: 'quien-soy', component: QuienSoy},
    {path: 'acceso-rapido/acceso-rapido', component: AccesoRapido},
    {path: 'acceso-rapido-roles/acceso-rapido-roles', component: AccesoRapidoRoles},
];

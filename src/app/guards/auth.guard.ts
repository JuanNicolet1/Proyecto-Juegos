import { Injectable, inject } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard{
    private authService = inject(AuthService);
    private router = inject(Router);

    canActivate(): boolean | UrlTree {
        return this.authService.isAuthenticated() ? true: this.router.createUrlTree(['/login']);
    }
}
import { Injectable } from "@angular/core";

export interface CanLeave{
    canDeactivate: () => boolean;
}

@Injectable({
    providedIn: 'root'
})

export class UssaveChangesGuard{
    canDeactivate(component: CanLeave){
        return component.canDeactivate() || confirm("Est'as seguro de salir?")
    }
}
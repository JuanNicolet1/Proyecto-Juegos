import { Component } from '@angular/core';
import { Nav } from '../../Componentes/nav/nav';
import { RouterLink } from '@angular/router';
import { ChatComponent } from '../../chat/chat';
import { ErrorPipe } from '../../pipe/pipe_error';
import { AuthService } from '../../services/auth.service';
import { HoverScaleDirective } from '../../directivas/directivas';

@Component({
  selector: 'app-home',
  imports: [Nav, RouterLink, ChatComponent, HoverScaleDirective, ErrorPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  permitir = true;
  noPermitir = true;

  constructor(private auth: AuthService) {

  if(this.auth.edadMayor()){
    this.permitir = true;
    this.noPermitir = false;
  }
    if(!this.auth.edadMayor()){
    this.noPermitir = true;
    this.permitir = false;
  }}
}

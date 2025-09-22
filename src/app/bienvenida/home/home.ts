import { Component } from '@angular/core';
import { Nav } from '../../Componentes/nav/nav';
import { RouterLink } from '@angular/router';
import { ChatComponent } from '../../chat/chat';

@Component({
  selector: 'app-home',
  imports: [Nav, RouterLink, ChatComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

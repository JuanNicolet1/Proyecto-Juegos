import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SupabaseService } from '../services/supabase';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css']
})
export class ChatComponent implements OnInit {
  mensajes: any[] = [];
  mensaje = '';
  usuario = '';
  channel: any;

  constructor(private supabaseService: SupabaseService, private auth: AuthService, private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    this.mensajes = await this.supabaseService.getMensajes();
    this.channel = this.supabaseService.suscribirseMensajes((payload) => {
      this.mensajes.push(payload.new);
    });
  }

  async enviar() {
    if (!this.mensaje.trim()) return;
    await this.supabaseService.enviarMensaje(this.mensaje);
    this.usuario = this.auth.username();
    this.mensajes = await this.supabaseService.getMensajes();
    this.cdr.detectChanges();
    this.mensaje = '';
  }
}


import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Nav } from '../../../../../Componentes/nav/nav';
import { SupabaseService } from '../../../../../services/supabase';

@Component({
  selector: 'app-ranking-preguntados',
  imports: [Nav],
  templateUrl: './ranking-preguntados.html',
  styleUrl: './ranking-preguntados.css'
})
export class RankingPreguntados implements OnInit{
  resultados: any[] = [];
      
  constructor(private supabase: SupabaseService, private cdr: ChangeDetectorRef){}
      
  async ngOnInit() {
    await this.getResultados()
    this.cdr.detectChanges(); 
  }
      
  async getResultados(){
    this.resultados = await this.supabase.getRankingPreguntados()
  }
}

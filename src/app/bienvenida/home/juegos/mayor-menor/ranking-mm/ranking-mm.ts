import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Nav } from '../../../../../Componentes/nav/nav';
import { SupabaseService } from '../../../../../services/supabase';

@Component({
  selector: 'app-ranking-mm',
  imports: [Nav],
  templateUrl: './ranking-mm.html',
  styleUrl: './ranking-mm.css'
})
export class RankingMm implements OnInit{
  resultados: any[] = [];

  constructor(private supabase: SupabaseService, private cdr: ChangeDetectorRef){}

  async ngOnInit() {
    await this.getResultados()
    this.cdr.detectChanges(); 
  }

  async getResultados(){
    this.resultados = await this.supabase.getRankingM()
  }
}

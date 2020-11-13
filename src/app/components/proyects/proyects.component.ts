import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { ScriptsService } from '../../services/scripts.service';
import {ProyectosService, Proyecto} from '../../services/proyectos.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css', './galeria.css']
})
export class ProyectsComponent implements OnInit, OnDestroy{

  ListaProyectos: Proyecto;
  ListaProyecto: Proyecto;
  boe: any;
  boe2: any;
  loading: boolean;
  constructor(private CargaScripts: ScriptsService, public ps: ProyectosService, private router: Router) {}

  ngOnInit(): void {

    this.CargaScripts.Carga(['popup']);
    this.boe = this.ps.getJson('assets/json/proyectos.json').subscribe((res: any) => {this.ListaProyectos = res; });

    this.boe2 = this.ps.getJson('assets/json/proyecto.json').subscribe((res: any) => {this.ListaProyecto = res; });
  }

  verProyecto(idx: number): void {
    console.log(idx);
    this.router.navigate(['/proyecto', idx]);
  }

  ngOnDestroy(): void {
    this.boe.unsubscribe();
    this.boe2.unsubscribe();
    this.CargaScripts.Destruir();
  }
}

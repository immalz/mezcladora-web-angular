import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService, Proyecto } from '../../services/proyectos.service';
@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit, OnDestroy {

  Proyecto: any;
  ciclo: any;
  loading: boolean;

  constructor(private activateRoute: ActivatedRoute, public ps: ProyectosService) { }

  ngOnInit(): void {

    this.loading = true;
    this.ciclo = this.activateRoute.params.subscribe(params => {
      this.ps.getJson('assets/json/proyecto.json').subscribe((res: any) => {
        this.Proyecto = res[params[`id`]];

        this.loading = false;
      });
    });
  }
  ngOnDestroy(): void {
    this.ciclo.unsubscribe();
  }

}


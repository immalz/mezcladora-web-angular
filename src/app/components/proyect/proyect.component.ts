import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService, Proyecto } from '../../services/proyectos.service';
@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit, OnDestroy {

  Proyecto: Proyecto;
  ciclo: any;
  loading: boolean;

  constructor(private activateRoute: ActivatedRoute, public ps: ProyectosService) { }

  ngOnInit(): void {

    this.loading = true;

    this.activateRoute.params.subscribe(params => {
      this.ps.getJson('assets/json/proyecto.json').subscribe((res: Proyecto) => {
        this.Proyecto = res[params[`id`]];
        this.loading = false;
      });
    });


    // Youtube Player Media
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngOnDestroy(): void {}

}


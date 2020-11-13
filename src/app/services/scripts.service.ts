import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() { }
  script: any;

  Carga(archivos: string[]): void {
    for ( const archivo of archivos ) {
      this.script = document.createElement('script');

      this.script.src = './assets/js/' + archivo + '.js';

      const body = document.getElementsByTagName('body')[0];

      body.appendChild(this.script);
      console.log(body);
    }
  }

  Destruir(): void {
    const body = document.getElementsByTagName('body')[0];
    body.removeChild(this.script);
    console.log(body);
  }
}

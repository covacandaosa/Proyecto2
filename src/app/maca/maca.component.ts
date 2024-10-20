import { Component } from '@angular/core';

@Component({
  selector: 'app-maca',
  templateUrl: './maca.component.html',
  styleUrls: ['./maca.component.css']
})
export class MacaComponent {
  imagenes = [
    'assets/maca/maca1.png',
    'assets/maca/maca2.png',
    'assets/maca/maca3.png'
  ];

  descripcion = 'Maca es la leal y juguetona compañera de la Hippie.  está a su lado, llevando un toque de alegría con su naturaleza curiosa y su aguda inteligencia.';
  nombre = 'Maca, La Gatita Aventurera';

  imagenActualIndex = 0;

  constructor() {
    setInterval(() => {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagenes.length; // Cambiar imagen cada 250ms
    }, 250);
  }

  get imagenActual() {
    return this.imagenes[this.imagenActualIndex]; // Devuelve la imagen actual
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cova',
  templateUrl: './cova.component.html',
  styleUrls: ['./cova.component.css']
})
export class CovaComponent {
  imagenes = [
    'assets/cova/cova1.png',
    'assets/cova/cova2.png',
    'assets/cova/cova3.png',
    'assets/cova/cova4.png'
  ];

  descripcion = 'Soy Cova, la amiga de la hippie. El mundo real es un coñazo, así que prefiero ser pirata. Aquí solo me importan la hippie y su gata Maca. Si no están en peligro, me importa un carajo ese tal Ignis.'
  nombre = 'Cova, La Bruja Pirata';

  imagenActualIndex = 0;

  constructor() {
    setInterval(() => {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagenes.length;//cambiar imagen cada 250 milisegundos
    }, 250);
  }

  get imagenActual() {
    return this.imagenes[this.imagenActualIndex]; //devuelve la imagen actual
  }
}

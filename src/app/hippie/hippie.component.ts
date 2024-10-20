import { Component } from '@angular/core';

@Component({
  selector: 'app-hippie',
  templateUrl: './hippie.component.html',
  styleUrls: ['./hippie.component.css']
})
export class HippieComponent {
  imagenes = [
    'assets/hippie/hippie1.png',
    'assets/hippie/hippie2.png',
    'assets/hippie/hippie3.png',
    'assets/hippie/hippie4.png'
  ];

  descripcion = 'Una estudiante que pensó que era un viaje gratuito a un festival de música. Ahora, con su espada corta y su ukelele, navega por un mundo de magia. Viaja acompañada de su adorable gatita, Maca.';
  nombre = 'Hippie, La Babosilla de Luz';

  imagenActualIndex = 0;

  constructor() {
    setInterval(() => {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagenes.length; //cambia la imagen cada dos segundos
    }, 250);
  }

  get imagenActual() {
    return this.imagenes[this.imagenActualIndex];
  }
}

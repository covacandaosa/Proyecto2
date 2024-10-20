import { Component } from '@angular/core';

@Component({
  selector: 'app-elara',
  templateUrl: './elara.component.html',
  styleUrls: ['./elara.component.css']
})
export class ElaraComponent {
  imagenes = [
    'assets/light/light1.png',
    'assets/light/light2.png',
    'assets/light/light3.png',
    'assets/light/light4.png'
  ];
  
  descripcion = 'Una poderosa bruja capaz de controlar los rayos, lucha por la justicia y la paz.';
  nombre = 'Elara, La Bruja de la Luz';
  
  imagenActualIndex = 0;

  constructor() {
    setInterval(() => {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagenes.length; // Cambiar imagen cada 2 segundos
    }, 250);
  }

  get imagenActual() {
    return this.imagenes[this.imagenActualIndex]; // Devuelve la imagen actual
  }
}

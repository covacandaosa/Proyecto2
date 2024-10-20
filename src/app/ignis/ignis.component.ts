import { Component } from '@angular/core';

@Component({
  selector: 'app-ignis',
  templateUrl: './ignis.component.html',
  styleUrls: ['./ignis.component.css']
})
export class IgnisComponent {
  imagenes = [
    'assets/fire/fire1.png',
    'assets/fire/fire2.png',
    'assets/fire/fire3.png',
    'assets/fire/fire4.png',
    'assets/fire/fire5.png',
    'assets/fire/fire6.png',
    'assets/fire/fire7.png',
    'assets/fire/fire8.png',
    'assets/fire/fire9.png',
    'assets/fire/fire10.png',
    'assets/fire/fire11.png',
    'assets/fire/fire12.png',
    'assets/fire/fire13.png',
    'assets/fire/fire14.png'
  ];

  descripcion = 'Hechicero, conocido y temido villano que controla el fuego, busca destruir todo lo que representa la paz y la armonía.';
  nombre = 'Ignis, El Villano del Fuego';

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

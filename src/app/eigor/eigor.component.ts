import { Component } from '@angular/core';

@Component({
  selector: 'app-eigor',
  templateUrl: './eigor.component.html',
  styleUrls: ['./eigor.component.css']
})
export class EigorComponent {
  imagenes = [
    'assets/creature/creature1.png',
    'assets/creature/creature2.png',
    'assets/creature/creature3.png',
    'assets/creature/creature4.png'
  ];

  descripcion = 'Todos los hechiceros y brujas del reino están sujetos a una maldición de sangre, las noches de luna llena pueden ser confusas...';
  nombre = 'Eigor, Criatura de la Noche';

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

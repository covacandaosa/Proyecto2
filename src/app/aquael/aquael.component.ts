import { Component } from '@angular/core';

@Component({
  selector: 'app-aquael',
  templateUrl: './aquael.component.html',
  styleUrls: ['./aquael.component.css']
})
export class AquaelComponent {
  imagenes = [
    'assets/water/water1.png',
    'assets/water/water2.png',
    'assets/water/water3.png',
    'assets/water/water4.png',
    'assets/water/water5.png',
    'assets/water/water6.png'
  ];
  
  descripcion = 'Un sabio y benevolente maestro del agua, usa su magia para sanar y proteger a los necesitados.';
  nombre = 'Aquael, El Hechicero del Agua';
  
  imagenActualIndex = 0;

  constructor() {
    setInterval(() => {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagenes.length;
    }, 250);
  }

  get imagenActual() {
    return this.imagenes[this.imagenActualIndex];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //personajes
  personajes = [
    {
      nombre: 'Elara, La Bruja de la Luz',
      clase: 'elara',
    },
    {
      nombre: 'Aquael, El Hechicero del Agua',
      clase: 'aquael',
    },
    {
      nombre: 'Ignis, El Villano del Fuego',
      clase: 'ignis',
    },
    {
      nombre: 'Eigor, La Criatura de la Noche',
      clase: 'eigor',
    },
    {
      nombre: 'Hippie, La Babosilla de Luz',
      clase: 'hippie',
    },
    {
      nombre: 'Maca, La Gatita Aventurera',
      clase: 'maca',
    },
    {
      nombre: 'Cova, La Bruja Pirata',
      clase: 'cova',
    }
  ];

  //mapas
  mapas = [
    {
      nombre: 'The Fire Of the Four Houses',
      imagenPreview: 'assets/maps/palacio.png',
      imagenGrande: 'assets/maps/mapapalacio.png',
      descripcion: 'Una vasta región dominada por el poder implacable del fuego...',
    },
    {
      nombre: 'Princes\'s Port',
      imagenPreview: 'assets/maps/bosque.png',
      imagenGrande: 'assets/maps/mapabosque.png',
      descripcion: 'Un refugio de paz y armonía...',
    },
    {
      nombre: 'The City of Riverend',
      imagenPreview: 'assets/maps/cementerio.png',
      imagenGrande: 'assets/maps/mapacementerio.png',
      descripcion: 'Un antiguo baluarte de la espiritualidad y la magia...',
    },
    {
      nombre: 'El Destierro',
      imagenPreview: 'assets/maps/destierro.png',
      imagenGrande: 'assets/maps/mapadestierro.png',
      descripcion: 'Una vasta extensión de tierra yerma y cenizas...',
    }
  ];


  personajeActual = 0;
  personajeSeleccionado: string = this.personajes[this.personajeActual].clase;


  mapaSeleccionado: any = null;


  siguientePersonaje(): void {
    this.personajeActual = (this.personajeActual + 1) % this.personajes.length;
    this.personajeSeleccionado = this.personajes[this.personajeActual].clase;
  }


  anteriorPersonaje(): void {
    this.personajeActual = (this.personajeActual - 1 + this.personajes.length) % this.personajes.length;
    this.personajeSeleccionado = this.personajes[this.personajeActual].clase;
  }


  openMap(mapa: any): void {

    if (this.mapaSeleccionado === mapa) {
      this.mapaSeleccionado = null;
    } else {

      this.mapaSeleccionado = mapa;
    }
  }
}

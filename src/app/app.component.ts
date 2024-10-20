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
      descripcion: 'Una vasta región dominada por el poder implacable del fuego. El Palacio del Fuego se alza en el corazón del reino, donde Ignis gobierna con mano de hierro. Sus habitantes son crueles y arrogantes, regidos por una tradición de conquista y destrucción. El calor abrasador parece nunca ceder, y las llamas consumen a todos los que se atrevan a desafiar el régimen de Ignis. Aquí, el fuego no solo es un arma, es el alma de este reino desolador.',
    },
    {
      nombre: 'Princes\'s Port',
      imagenPreview: 'assets/maps/bosque.png',
      imagenGrande: 'assets/maps/mapabosque.png',
      descripcion: 'Un refugio de paz y armonía, donde la naturaleza y la civilización coexisten en perfecta sintonía. Los habitantes de Princes`s Port viven en comunión con los animales del mágico bosque que rodea la región. Árboles gigantescos, llenos de vida, forman un santuario para todos los seres que valoran la serenidad. Este lugar irradia calma, pero también esconde secretos ancestrales que protegen a los suyos de aquellos que buscan perturbar la paz. Aquí, la magia es tan natural como el aire que se respira.',
    },
    {
      nombre: 'The City of Riverend',
      imagenPreview: 'assets/maps/cementerio.png',
      imagenGrande: 'assets/maps/mapacementerio.png',
      descripcion: 'Un antiguo baluarte de la espiritualidad y la magia, ahora en ruinas tras la devastación causada por el ataque de Ignis. El cementerio mágico, una vez considerado sagrado, yace en silencio, protegido por las fuerzas de la naturaleza. Riverend fue el hogar de Aquael, quien dedicó su vida a sanar y proteger este lugar hasta que el fuego invadió todo. Las aguas místicas que fluyen por la ciudad aún guardan el eco de su sabiduría, pero ahora están manchadas por la tragedia y la oscuridad.',
    },
    {
      nombre: 'El Destierro',
      imagenPreview: 'assets/maps/destierro.png',
      imagenGrande: 'assets/maps/mapadestierro.png',
      descripcion: 'Una vasta extensión de tierra yerma y cenizas, lo que queda de una civilización que pereció hace siglos. Nadie con juicio claro se atrevería a permanecer aquí por mucho tiempo. Las ruinas son testigos mudos de una era de grandeza, ahora reducida a polvo. Criaturas errantes, locas y monstruosas, vagan sin rumbo por esta región, y entre ellas se encuentra Eigor, atrapado en el vacío de la locura y la desolación. El Destierro es el hogar de los olvidados, los profanos y los condenados.',
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


//  j'importe input en plus du component
import { Component, Input } from '@angular/core';

// j'importe le model Film
import { Film } from '../models/liste-films.model'

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css']
})

// Nous avons une classe film à instancier
export class ListeFilmsComponent {
//   // on place "!" pour dire à Angular qu'on initialise notre variable plus tard
//   //de même que l'on définit son type
//   titre!: string;
//   realisateur!: string;
//   descritpion!: string;
//   dureeTotale!: number;
//   dureeVisio!: number;
//   imageUrl!: string;

// // en utilisant la méthode ngOnInit(), qui sera lancée par Angular à chaque création d'instance du composant
// ngOnInit() {
//   this.titre = "Avatar";
//   this.realisateur = "James Cameron";
//   this.descritpion = "Film americain de science-fiction, réalisé en 2009";
//   this.dureeTotale = 162;
//   this.dureeVisio = 162;
//   this.imageUrl = "assets/img/affiches_films/avatar.jpg"

// }

// Nous avons besoin d'injecter nos propriétés depuis l'extérieur de ce composant.
//Pour cela, nous avons besoin d'un nouveau décorateur : @Input()
  @Input() instanceFilm!: Film; 


}



// Les propriétés d'un composant sont déclarées en haut de clase et initialisés dans ngOnInit() qui est apl à chaque création d'instance.

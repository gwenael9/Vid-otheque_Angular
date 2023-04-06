import { Component, OnInit } from '@angular/core';
import { Film } from './models/liste-films.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// J'ai besoin d'implémenter OnInit pour alimenter notre composant à chaque nouvelle instance.
export class AppComponent implements OnInit {
  // je crée une propriété listeFilm lié à ma classe Film (model) sous forme de tableau
  listeFilms!: Film[];



  // On lance l'app
  ngOnInit(): void {
    this.listeFilms = [

      {
      "titre" : "Avatar",
      "realisateur" : "James Cameron",
      "description" : "Film americain de science-fiction, réalisé en 2009",
      "dureeTotale" : 162,
      "dureeVisio" : 162,
      "imgUrl" : "assets/img/affiches_films/avatar.jpg",
      },

      {
        "titre" : "Intouchables",
        "realisateur" : "Olivier Nakache",
        "description" : "Comédie/drame français sorti en 2011",
        "dureeTotale" : 112,
        "dureeVisio" : 112,
        "imgUrl" : "assets/img/affiches_films/intouchables.jpg",
      },

      {
        "titre" : "Django Unchained",
        "realisateur" : "Quentin Tarantino",
        "description" : "Western américain sorti en 2013",
        "dureeTotale" : 165,
        "dureeVisio" : 0,
        "imgUrl" : "assets/img/affiches_films/django.jpg",
      },   

      {
        "titre" : "Get Out",
        "realisateur" : "Jordan Peele",
        "description" : "Ce thriller américain est sorti en 2017, faisant un box-office de 255,4 millions $",
        "dureeTotale" : 104,
        "dureeVisio" : 104,
        "imgUrl" : "assets/img/affiches_films/get_out.jpg",
      },     
      
      {
        "titre" : "Drunk",
        "realisateur" : "Thomas Vinterberg", 
        "description" : "Une comédie dramatique sorti en 2020, au Danemark",
        "dureeTotale" : 115,
        "dureeVisio" : 0,
        "imgUrl" : "assets/img/affiches_films/drunk.jpg",
      },    
      
      {
        "titre" : "Le loup de Wall Street",
        "realisateur" : "Martin Scorsese",
        "description" : "Célèbre comédie dramatique américaine sorti en 2013, faisant un box-office de 406,9 millions $",
        "dureeTotale" : 179,
        "dureeVisio" : 150,
        "imgUrl" : "assets/img/affiches_films/loup_de_wall_street.jpg",
      },
    ]

  }
}

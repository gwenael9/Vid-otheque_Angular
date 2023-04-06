
// je crée une classe génerique de film qui servira de squelette
export class Film {
    // Nous utiliserons un constructeur
    constructor(
        //TypeScript nous permet d'avoir une syntaxe plus lisible si nos propriétés seront bien 
        // toutes initialisées en rajoutant lemodifcateur public
        public titre: string,
        public realisateur : string,
        public description : string,
        public dureeTotale : number,
        public dureeVisio : number,
        public imgUrl : string
    ) {}
}

//  const films = [
//   new Films("Avatar", "James Cameron", 162, 162, "Film americain de science-fiction, réalisé en 2009"),
//   new Films("Intouchables", "Olivier Nakache et Eric Toledano", 112, 112, "Comédie/drame français sorti en 2011"),
//   new Films("Django Unchained", "Quentin Tarantino", 165, 120, "Western américain sorti en 2013"),
//   new Films("Get Out", "Jordan Peele", 104, 104, "Ce thriller américain est sorti en 2017, faisant un box-office de 255,4 millions $"),
//   new Films("Drunk", "Thomas Vinterberg", 115, 100, "Une comédie dramatique sorti en 2020, au Danemark"),
//   new Films("Le loup de Wall Street", "Martin Scorsese", 179, 150, "Célèbre comédie dramatique américaine sorti en 2013, faisant un box-office de 406,9 millions $"),
// ]       


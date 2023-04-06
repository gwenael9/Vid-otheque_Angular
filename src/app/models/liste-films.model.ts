
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









import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// J'ai besoin d'implémenter OnInit pour alimenter notre composant à chaque nouvelle instance.
export class AppComponent implements OnInit {
  title = 'Videotheque';
  ngOnInit(): void {

  }
}

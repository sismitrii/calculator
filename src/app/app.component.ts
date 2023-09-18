import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  buttonValueList: string[] = [
    "C",
    "±",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "DEL",
    "=",
  ]
}

// faire un composant bouton 
// on lui envoie sa valeur 
// si c'est une valeur numeric le click appelle cette methode et on met telle couleur
// si c'est une valeur dans un liste /,*,+,-,= on appelle methode operateur et telle couleur
// si c'est une valeur parmi C,%, ± on appelle methode XXX et telle couleur

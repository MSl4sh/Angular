import { Injectable } from '@angular/core';

export interface Movie {
  title:string;
  description:string;
}


// le mot injectable rend l'instance de ma classe connue par angular, cette instance pourra être distribée à la demande dans nos composants.
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAllMovies():Movie[]{
    return[{
      title:"Forest Gump",
      description:"il court mais pas la maladie d'amour"
    },
    {
      title:"Alice au pays des merveilles",
      description:"Le lapin est en retard"
    },
    {
      title:"L'attaque des bananes martiennes",
      description:"Un film pas terrible"
    }
  ]
  }
}

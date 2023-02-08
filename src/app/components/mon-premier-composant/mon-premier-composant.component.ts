import { Component } from '@angular/core';
import { MoviesService, Movie } from 'src/app/services/movies.service';


@Component({
  //fonctionne comme des selecteurs css
  selector: '.premierComposant',
  //chemin vers le fichier Html lié à la class
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.css']
})
export class MonPremierComposantComponent {
 criDeVictoire="Hourra !"
 declare movies:Movie[]
 constructor(private moviesService : MoviesService){
  this.movies = this.moviesService.getAllMovies();
 }


 

 getBanane(){
  return 'banane'
 }
}

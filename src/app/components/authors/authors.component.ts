import { Component } from '@angular/core';
import { AuthorsService,Authors } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  declare authors:Authors[]
 constructor(private authorsService : AuthorsService){
  this.authors = this.authorsService.getauthors();
 }
}

import { Injectable } from '@angular/core';

export interface Authors {
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getauthors (){
    return[
      {
        name:"Roland Culé"
      },
      {
        name:"Roland Foiré"
      },
      {
        name:"Roland Gular"
      },
    ]
  }
}

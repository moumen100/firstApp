import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() {}
  listOfAuthors=['author1','author2','author3'];
  count() {
    return this.listOfAuthors.length;
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceMock {
  constructor() {}

  getUsers(): Array<{}> {
    return [
      {
        name: 'Name',
        surname: 'Surname'
      }
    ];
  }
}

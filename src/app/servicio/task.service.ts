import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioTask {

  uri: string = '';
  
    constructor(private _http: HttpClient) { 
    this.uri = 'https://jsonplaceholder.typicode.com/users'
    }
    getDato(){
      return this._http.get(this.uri)		
    }
}

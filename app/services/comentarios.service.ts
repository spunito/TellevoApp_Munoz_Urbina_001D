import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient: HttpClient) { }

  getTopComments(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/comments/');
  }

}

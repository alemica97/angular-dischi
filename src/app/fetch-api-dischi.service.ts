import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Card } from './models/card';
import { ApiResponse } from './models/apiResponse';

@Injectable({
  providedIn: 'root'
})

export class FetchApiDischiService {

  constructor(private http: HttpClient) { }


  /**Prendo i dischi tramite una chiamata api */
  /**faccio una chiamata alle api che torna una elemento di tipo <ApiResponse> con .pipe aggiungo dei metodi
  in questo caso (map) che prende il risultato della chiamata e restituisce risultato.response*/
  getDischi(): Observable<Card[]> {
    return this.http.get<ApiResponse>('https://flynn.boolean.careers/exercises/api/array/music').pipe(
      map(result => result.response.reverse()),
      catchError((err) => {
        console.log('errore trovato')
        console.log('errore: ',err);

        return throwError(err);
      })
    );
  }

  /**Passando il titolo come parametro, ritorno il disco il cui titolo corrisponde al titolo del disco cliccato*/
  getDisco(title: string): Observable<Card> {
    return this.http.get<ApiResponse>('https://flynn.boolean.careers/exercises/api/array/music').pipe(
      map(result => {
        let card = result.response.find(el => el.title === title);
        //Se card esiste la ritorna, altrimenti torna una card vuota di default
        return card || <Card> {
          title: "No title",
          author: "N/A",
          genre: "N/A",
          year: "N/A",
          poster: ""
        };
      }),
      catchError((err) => {
        console.log('errore trovato')
        console.log('errore: ',err);
        return throwError(err);
      })
    );
  }
 }

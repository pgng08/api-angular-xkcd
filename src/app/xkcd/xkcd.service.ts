import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBandeDessinee } from '../ibandedessinee';

@Injectable({
  providedIn: 'root',
})

// Classe xkcdService
export class XkcdService {
  private urlDerniere: string =
    'https://cors.jonathanmartel.info/?url=https://xkcd.com/info.0.json';
  private urlDebute: string =
    'https://cors.jonathanmartel.info/?url=https://xkcd.com/';
  private urlFin: string = '/info.0.json';

  constructor(private http: HttpClient) {}

  /**
   * Fonction qui execute le fetch a la base de donnees et recupere la BD par son ID/numero
   */
  getUneBD(num: any): Observable<any> {
    console.log('getUneBD ID ' + num);
    return this.http.get<any>(this.urlDebute + num + this.urlFin);
  }

  /**
   * Fonction qui execute le fetch a la base de donnees et recupere la derniere BD
   */
  getDerniereBD(): Observable<any> {
    console.log('getDerniereBD');
    return this.http.get<IBandeDessinee>(this.urlDerniere);
  }

  /**
   * Fonction qui execute le fetch a la base de donnees et recupere la une BD aleatoire
   */
  getAleatoireBD(): Observable<any> {
    let numAleatoire = Math.floor(Math.random() * 2768) + 1;

    console.log('getAleatoireBD ID: ' + numAleatoire);

    return this.http.get<any>(this.urlDebute + numAleatoire + this.urlFin);
  }
}

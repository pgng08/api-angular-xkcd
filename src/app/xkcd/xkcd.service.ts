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
  private urlDebut: string =
    'https://cors.jonathanmartel.info/?url=https://xkcd.com/';
  private urlFin: string = '/info.0.json';

  constructor(private http: HttpClient) {}

  /**
   * Fonction qui execute le fetch a la base de donnees et recupere la BD par son nombre (num)
   */
  getUneBD(num: any): Observable<any> {
    console.log('getUneBD ID ' + num);
    return this.http.get<any>(this.urlDebut + num + this.urlFin);
  }

  /**
   * Fonction qui execute le fetch a la base de donnees et recupere la derniere BD
   */
  getDerniereBD(): Observable<any> {
    console.log('getDerniereBD');
    console.log(this.http.get<IBandeDessinee>(this.urlDerniere));

    return this.http.get<IBandeDessinee>(this.urlDerniere);
  }

  /**
   * Fonction qui execute le fetch a la base de donnees et recupere la une BD aleatoire
   */
  getAleatoireBD(numDerniereBD: number): Observable<any> {
    let numAleatoire = Math.floor(Math.random() * numDerniereBD) + 1;

    console.log('getAleatoireBD num: ' + numAleatoire);

    return this.http.get<any>(this.urlDebut + numAleatoire + this.urlFin);
  }
}

import { Injectable } from '@angular/core';
import { IBandeDessinee } from '../ibandedessinee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { IListeProduit } from '../iliste-produit';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiBandeDessinee {
  private url: string = 'https://cors.jonathanmartel.info/?url=https://xkcd.com/info.0.json';
  private urlID: string = 'https://cors.jonathanmartel.info/?url=https://xkcd.com/1808/info.0.json';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Fonction qui execute le fetch dans la BD pour prendre les informations de toutes les bières
   * @returns
   */
  getDerniereBD(): Observable<IBandeDessinee> {
    console.log('getDerniereBD...');
    return this.http.get<IBandeDessinee>(this.url);
  }

  /**
   * Fonction qui execute le fetch dans la BD pour prendre les informations d'une biere par son ID
   * @param id
   * @returns
   */
  getUneBD(id: any): Observable<any> {
    console.log('getBiere... ID ' + id);
    //console.log(this.http.get<IBandeDessinee>(this.url + id));

    return this.http.get<any>(this.url + id);

    //return {id_biere:id};
  }

}

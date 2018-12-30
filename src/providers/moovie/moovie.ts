import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

private baseApiPath  = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }


  getLatestMovies(page=1) {
   // let url = this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.apiKey);
   // console.log(url);
   // return url;
  return this.http.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=1f1be91ad8ff92c2f10cde335d41714b&&language=pt-BR`);
  }

  getMoviesDetails(filmeid) {
   return this.http.get("https://api.themoviedb.org/3" + `/movie/${filmeid}?api_key=1f1be91ad8ff92c2f10cde335d41714b&&language=pt-BRd`);
   }

  get apiKey(): string
  {
    return "1f1be91ad8ff92c2f10cde335d41714b";

  }
}

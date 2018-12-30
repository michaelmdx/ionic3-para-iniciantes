import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MoovieProvider]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public MovieProvider: MoovieProvider) {
  }

  ionViewDidEnter() {

    this.filmeid = this.navParams.get("id");
    console.log("Recebido até aqui ", this.filmeid);
    this.MovieProvider.getMoviesDetails(this.filmeid).subscribe(data=>{
        let retorno = (data as any)._body;
        this.filme = JSON.parse(retorno);
    },error=> {
        console.log(error);
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ShowWhen } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed= {
    titulo:"Michael Guedes - The Best", 
    data:"November 5, 1955", 
    descricao: "Estou criando um app incrivel...",
    qntd_likes : 12, 
    qntd_comments : 4,
    time_comment: "11h ago"

  }

  public lista_filmes = new Array<any>();
  public page = 1;


  public nome_usuario:string = "Michael Guedes";
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider, 
    public loadingCtrl: LoadingController) {
  }


  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id});
  }


  abreCarregando() {
     this.loader = this.loadingCtrl.create({
      content: "Por favor aguarde...",
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert(num1 + num2)
  }

  ionViewDidLoad() {
    this.carregarFilmes();
  }


  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
      this.page++;
      this.carregarFilmes(true);
         
  }



  carregarFilmes(newpage: boolean=false){
    this.abreCarregando();

    this.movieProvider.getLatestMovies(this.page).subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno =  JSON.parse(response._body);

        if(newpage)
        {
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          this.infiniteScroll.complete();
        }
        else
        {
          this.lista_filmes = objeto_retorno.results;
        }
        
        this.fechaCarregando();

        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
        
      }, error =>{
        this.fechaCarregando();
        console.log(error);
        
      }
    )
  }
}

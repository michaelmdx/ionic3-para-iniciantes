import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http"
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { FeedPage } from '../pages/feed/feed';
import { LoginPageModule } from '../pages/login/login.module';
import { LoginPage } from '../pages/login/login';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';
import { CartolaProvider } from '../providers/cartola/cartola';
import { AtletasPageModule } from '../pages/atletas/atletas.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    FeedPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //FeedPageModule, 
    IntroPageModule,
    HttpModule,
    ConfiguracoesPageModule, 
    PerfilPageModule, 
    SobrePageModule, 
    FilmeDetalhesPageModule, 
    AtletasPageModule
    //HttpClientModule
    //LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    FeedPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider,
    CartolaProvider
  ]
})
export class AppModule {}

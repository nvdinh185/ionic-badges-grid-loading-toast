import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BadgesPage } from '../pages/badges/badges';
import { ToastPage } from '../pages/toast/toast';
import { LoadingPage } from '../pages/loading/loading';
import { GridsPage } from '../pages/grids/grids';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BadgesPage,
    ToastPage,
    LoadingPage,
    GridsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BadgesPage,
    ToastPage,
    LoadingPage,
    GridsPage
  ],
  providers: []
})
export class AppModule {}

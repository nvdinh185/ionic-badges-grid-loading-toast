import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BadgesPage } from '../badges/badges';
import { ToastPage } from '../toast/toast';
import { LoadingPage } from '../loading/loading';
import { GridsPage } from '../grids/grids';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }

  badges(){
    this.navCtrl.push(BadgesPage)
  }

  toast(){
    this.navCtrl.push(ToastPage)
  }

  loading(){
    this.navCtrl.push(LoadingPage)
  }

  grids(){
    this.navCtrl.push(GridsPage)
  }
}

import { Component } from '@angular/core';

import { LoadingController } from 'ionic-angular';


@Component({
  templateUrl: 'loading.html'
})
export class LoadingPage {

  constructor(public loadingCtrl: LoadingController) { }

  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
    });
    loading.present();
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  }

}

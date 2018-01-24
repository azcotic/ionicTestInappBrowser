import { Component } from '@angular/core';

import { NavController , Platform , LoadingController} from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser'

@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {

	


constructor( public platform: Platform,public navCtrl: NavController,private iab: InAppBrowser,private loadingCtrl: LoadingController) {
	var script = 
      "var meta = document.createElement('meta');"+
      "meta.name = 'viewport';"+
      "meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no';"+
      "document.getElementsByTagName('head')[0].appendChild(meta);";

    var options = {
    location: 'no',	
    clearcache: 'yes',
    toolbar: 'no',
    hardwareback: 'no',
    fullscreen: 'yes',
    enableViewportScale: 'no'
  };

	const loading = this.loadingCtrl.create();//use loader
    loading.present();
    const browser = this.iab.create('https://www.foebbva.com/', '_self',options);

    

}

/*goToWebPage() {
    const loading = this.loadingCtrl.create();//use loader
    loading.present();
    const browser = this.iab.create('https://www.foebbva.com/',"location=0");
    
  }*/


}
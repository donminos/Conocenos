import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  public userLogin: any = { items: [] };
  public browserLang:any;


  constructor(public navCtrl: NavController, translate: TranslateService, public alertCtrl: AlertController,public http: HttpClient, public platform: Platform) {
    // used to set the default language for multi language support
    //OPCIONAL SI SE DEJA CARGA MAS RAPIDO EL IDIOMA
    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang : 'es');


    platform.registerBackButtonAction(() => {

    });
  }

  signalHelp() {
    let headers = new HttpHeaders({ "Content-Language": this.browserLang, "token": "1234564798" });
    this.http.post('https://www.tdmobile.com.mx/insurance/api/incidents/create.do', { "latitude": "", "longitude": "" },
      { headers }
    ).subscribe(data => {   // data is already a JSON object

    });
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }


}

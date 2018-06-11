import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController,Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Superdata } from '../../config';
import { SubProposalPage } from '../subProposal/subProposal';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  private information=Superdata;
  private http: any;
  private browserLang: string;
  constructor(platform: Platform,public navCtrl: NavController, public translate: TranslateService, http: HttpClient,
     public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.http = http;
    // used to set the default language for multi language support
    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang : 'es');

    platform.registerBackButtonAction(() => {
      platform.exitApp();
    });
  }

  openProposal(data) {
    this.navCtrl.push(SubProposalPage,{
      superdata:data
    });
  }

}

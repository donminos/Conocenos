import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Superdata } from '../../config';
import { SubProposalPage } from '../subProposal/subProposal';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'

})
export class PrincipalPage {
  rootPage: any
  private information=Superdata;
  private http: any;
  private browserLang: string;
  constructor(public navCtrl: NavController, public translate: TranslateService,
     public alertCtrl: AlertController, public loadingCtrl: LoadingController,public platform: Platform) {
    // used to set the default language for multi language support
    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang : 'es');

    platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(HomePage);
    });
  }

  openProposal(data) {
    this.navCtrl.push(SubProposalPage,{
      superdata:data
    });
  }

}

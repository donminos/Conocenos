import { Component } from '@angular/core';
import { NavController, AlertController,NavParams, LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { DescriptionProposalPage } from '../descriptionProposal/descriptionProposal';
import { Information } from '../../config';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'page-subProposal',
  templateUrl: 'subProposal.html'

})
export class SubProposalPage {
  private information: any;
  private browserLang: string;
  constructor(public navCtrl: NavController, public translate: TranslateService, http: HttpClient,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController,private navParams:NavParams) {
    // used to set the default language for multi language support
    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang : 'es');
    this.information=Information(navParams.get('superdata').id);
    
  }

  openDescription(item) {
    this.navCtrl.push(DescriptionProposalPage, {
      data: item
    });
  }

}

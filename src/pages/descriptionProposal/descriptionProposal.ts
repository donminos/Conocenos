import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController,ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { WelcomePage } from '../welcome/welcome';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'page-descriptionProposal',
  templateUrl: 'descriptionProposal.html'

})
export class DescriptionProposalPage {
  private option;
  private item={title:"Descripción"};
  private http: any;
  private browserLang: string;
  constructor(public navCtrl: NavController, public translate: TranslateService, http: HttpClient,public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController,private toastCtrl:ToastController,private navParams:NavParams) {
    this.http = http;
    // used to set the default language for multi language support
    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang : 'es');
    this.item=navParams.get("data");
  }  

}

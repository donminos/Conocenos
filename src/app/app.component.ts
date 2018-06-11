import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { oneSignalAppId, sender_id } from '../config';
import { SocialSharing } from '@ionic-native/social-sharing';

import { TranslateService } from '@ngx-translate/core';
import { WelcomePage } from '../pages/welcome/welcome';
import { PrincipalPage } from '../pages/principal/principal';
import { HomePage } from '../pages/home/home';
import { VideosPage } from '../pages/videos/videos';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage: any = HomePage;

  async afterLogin() {
    if (new Date() >= new Date('2018-06-27 23:00:00')) {
      this.rootPage = WelcomePage;
    } else {
      this.rootPage = HomePage;
    }
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translate: TranslateService,
    public loadingCtrl: LoadingController, private socialSharing: SocialSharing,
    private oneSignal: OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.afterLogin();

      translate.addLangs(["en", "es"]);
      translate.setDefaultLang('en');

      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

      statusBar.styleLightContent();
      splashScreen.hide();
      if (isCordovaAvailable()) {
        this.oneSignal.startInit(oneSignalAppId, sender_id);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();
      }
    });

  }
  private onPushReceived(payload: OSNotificationPayload) {
    alert('Push recevied:' + payload.body);
  }

  private onPushOpened(payload: OSNotificationPayload) {
    alert('Push opened: ' + payload.body);
  }

  goToPropostal() {
    this.rootPage = PrincipalPage;
  }
  goToHome() {
    this.rootPage = HomePage;
  }
  goToVideos() {
    this.rootPage = VideosPage;
  }
  sendMessageFacebook() {

    // Share via email
    this.socialSharing.share('Mi voto es por Gabriel Del Monte','Mi voto', 'https://reconstruyendoxochimilco.org/images/logo/gdm-logotipo-vertical-descriptivo-color.png', 'https://play.google.com/store/apps/details?id=information.tdmobile.com').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}


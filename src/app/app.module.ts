import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OneSignal } from '@ionic-native/onesignal';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubProposalPage } from '../pages/subProposal/subProposal';
import { DescriptionProposalPage } from '../pages/descriptionProposal/descriptionProposal';
import { WelcomePage } from '../pages/welcome/welcome';
import { PrincipalPage } from '../pages/principal/principal';
import { VideosPage } from '../pages/videos/videos';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http"; 
import { enableProdMode } from '@angular/core';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

enableProdMode();
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    SubProposalPage,
    DescriptionProposalPage,
    PrincipalPage,
    VideosPage
  ],
  imports: [
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    SubProposalPage,
    DescriptionProposalPage,
    PrincipalPage,
    VideosPage
  ],
  providers: [
    StatusBar,
    AndroidPermissions,
    SplashScreen,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

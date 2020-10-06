import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { CounselorComponent } from './counselor/counselor.component';
import { ChartsModule } from 'ng2-charts';
import { NewReportComponent } from './new-report/new-report.component';
import { AngularFireModule, FirebaseApp } from '@angular/fire';

const firebaseConfig = {
  apiKey: 'AIzaSyC9PQ5yqBQzQ3B-ZnTx5sNVglwP9Sxop9g',
  authDomain: 'careerscope-vri.firebaseapp.com',
  databaseURL: 'https://careerscope-vri.firebaseio.com',
  projectId: 'careerscope-vri',
  storageBucket: 'careerscope-vri.appspot.com',
  messagingSenderId: '748287607122',
  appId: '1:748287607122:web:bbc2655959d73e157a3a8b',
  measurementId: 'G-WCH5EK1BLV'
};

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CounselorComponent,
    NewReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

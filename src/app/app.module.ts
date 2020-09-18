import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { CounselorComponent } from './counselor/counselor.component';
import { ChartsModule } from 'ng2-charts';
import { NewReportComponent } from './new-report/new-report.component';

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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TourComponent } from './test-tour/mytour.component';
import { TrolleyComponent } from './test-trolley/mytrolley.component';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap/accordion';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
  ],
  declarations: [AppComponent, TourComponent, TrolleyComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: AccordionConfig, useValue: { closeOthers: true } }],
})
export class AppModule {}

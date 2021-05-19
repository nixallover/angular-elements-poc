import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'nicoles-test-chart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

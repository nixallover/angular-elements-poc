import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { ParetoChartComponent } from './pareto-chart.component';

@NgModule({
  declarations: [ParetoChartComponent],
  imports: [BrowserModule],
  entryComponents: [ParetoChartComponent],
})
export class ParetoChartModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(ParetoChartComponent, {
      injector: this.injector,
    });
    customElements.define('poc-pareto-chart-element', el);
  }
}

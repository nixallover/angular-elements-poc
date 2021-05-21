import { Component, Input, Output, EventEmitter } from '@angular/core';

type YAxisUnit = 'dollars' | 'kWh';

export type ChartDataModel = {
  id?: string;
  name: string;
  value: number;
  percentage?: number;
};

@Component({
  selector: 'poc-pareto-chart-element',
  template: `<div class="container">
    <h3>Pareto Chart</h3>
    <ul>
      <li *ngFor="let data of chartData">
        {{ data.name }}: {{ data.value }}
        <a (click)="chooseId(data.id)">{{ data.id }}</a>
      </li>
    </ul>
    Unit: {{ yAxisUnit }}, Total: {{ yAxisTotal }}
  </div> `,

  styles: [
    `
      .container {
        border: dotted 1px red;
        display: block;
        height: 500px;
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {
  @Input() yAxisUnit: YAxisUnit = 'dollars';
  @Input() chartData: ChartDataModel[] = [];
  @Input() yAxisTotal: number;

  @Output() selectid = new EventEmitter<string>();

  // constructor() {}

  // ngOnInit(): void {}

  chooseId(id: string) {
    console.log(`Chose ID: ${id}`);
    this.selectid.emit(id);
  }
}

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
    <h3>Pareto Chart Placeholder</h3>
    <ul>
      <li *ngFor="let data of chartData">
        <strong>{{ data.name }}:</strong> {{ data.value }}
        <a (click)="chooseId(data.id)">Select</a>
      </li>
    </ul>
    <strong>Unit:</strong> {{ yAxisUnit }}, <strong>Total:</strong>
    {{ yAxisTotal }}
  </div> `,

  styles: [
    `
      .container {
        border: dotted 1px red;
        display: block;
        height: 500px;
        width: 100%;
      }
      a {
        color: steelblue;
        text-decoration: underline;
        cursor: pointer;
      }
    `,
  ],
})
export class ParetoChartComponent {
  @Input() yAxisUnit: YAxisUnit = 'dollars';
  @Input() chartData: ChartDataModel[] = [];
  @Input() yAxisTotal: number;

  @Output() idChosen = new EventEmitter<string>();

  chooseId(id: string) {
    console.log(`Chose ID: ${id}`);
    this.idChosen.emit(id);
  }
}

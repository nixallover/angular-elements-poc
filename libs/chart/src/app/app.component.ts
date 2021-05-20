import { Component, Input } from '@angular/core';

type YAxisUnit = 'dollars' | 'kWh';

export type ChartDataModel = {
  name: string;
  value: number;
};

@Component({
  selector: 'poc-root',
  template: `<div class="container">
    <ul>
      <li *ngFor="let data of chartData">{{ data.name }}: {{ data.value }}</li>
    </ul>
    {{ yAxisUnit }}
  </div> `,

  styles: [
    `
      h1 {
        color: green;
      }
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

  // constructor() {}

  // ngOnInit(): void {}
}

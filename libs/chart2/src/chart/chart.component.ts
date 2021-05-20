import { Component, OnInit, Input } from '@angular/core';

type YAxisUnit = 'dollars' | 'kWh';

export type ChartDataModel = {
  name: string;
  value: number;
};

@Component({
  selector: 'poc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() yAxisUnit: YAxisUnit = 'dollars';
  @Input() chartData: ChartDataModel[];

  constructor() { }

  ngOnInit(): void {}

}

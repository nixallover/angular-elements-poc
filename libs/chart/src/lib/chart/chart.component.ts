import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'poc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartName: string;

  constructor() { }

  ngOnInit(): void {
  }

}

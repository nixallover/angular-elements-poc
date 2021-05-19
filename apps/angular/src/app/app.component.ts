import { Component } from '@angular/core';

@Component({
  selector: 'poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  chartData = [
    {
      name: 'Air House North Compressor',
      value: 6840.34
    },
    {
      name: 'Air House South Compressor',
      value: 4024.2
    },
    {
      name: 'Grit Blast Air Compressor',
      value: 3998.02
    },
    {
      name: 'Grit Blast South Compressor',
      value: 3871.94
    },
    {
      name: 'Fabrication East Compressor',
      value: 4002.72
    },
    {
      name: 'Fabrication West Compressor',
      value: 2009.47
    }
  ];
}

import { Component } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-pay-data',
  templateUrl: './pay-data.component.html',
  styleUrls: ['./pay-data.component.css']
})
export class PayDataComponent {

  title = 'ng2-charts-demo';


  

  //-----------------------------------------------------------

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    datasets: [
      {
        data: [ 10, 20, 50, 20, 27, 49, 70 ],
        label: '',
        fill: false,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'rgba(20,120,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = false;


  //--------------------------------------chart -2 ------------------------------


  public lineChart2Data: ChartConfiguration<'line'>['data'] = {
    labels: [
      '',
      '',
      '',
      '',
      ""
    ],
    datasets: [
      {
        data: [ 10, 50, 70, 40, 25 ],
        label: '',
        fill: false,
        tension: 0.5,
        borderColor: 'red',
        backgroundColor: 'rgba(20,120,0,0.3)'
      }
    ]
  };
  public lineChart2Options: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChart2Legend = false;

  constructor() {
  }

  ngOnInit() {
  }
}


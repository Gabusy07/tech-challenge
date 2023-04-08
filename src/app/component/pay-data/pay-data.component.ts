import { Component } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-pay-data',
  templateUrl: './pay-data.component.html',
  styleUrls: ['./pay-data.component.css']
})
export class PayDataComponent {

  title = 'ng2-charts-demo';
  chart_label = ['','','','','',];
  chart_borderColor = "blue";
  chart_data = [ 10, 20, 50, 20, 27, 49 ];

  price: String = "55"
  increase: String = "+2.5"



  

  //-----------------------------------------------------------

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.chart_label,
    datasets: [
      {
        data: this.chart_data,
        label: '',
        fill: false,
        tension: 0.5,
        borderColor: this.chart_borderColor,
        backgroundColor: 'rgba(20,120,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = false;


  constructor() {
  }

  ngOnInit() {
  }
}


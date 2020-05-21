import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.scss']
})
export class SummaryReportComponent implements OnInit, AfterViewInit {

  public chart: any = null;

  private report: any;

  constructor(
    private readonly activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activedRoute
      .data
      .subscribe(({ report }) => {
        this.report = report;
      });
  }

  ngAfterViewInit() {
    this.report && this.generateCharts(this.report);
  }

  private generateCharts(data): void {
    console.log(data);
    const { casesByAge } = data;
    const { items = [] } = casesByAge;
    this.chart = new Chart('report', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Total',
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 206, 86, 0.9)',
              'rgba(75, 192, 192, 0.9)',
              'rgba(153, 102, 255, 0.9)',
              'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    items
      .sort((a, b) => {
        const [ prevValue ] = a.range.split('-');
        const [ afterValue ] = b.range.split('-');
        return (+prevValue) -  (+afterValue);
      })
      .forEach(item => {
        this.chart.data.labels.push(item.range);
        this.chart.data.datasets[0].data.push(item.total);
      });
    this.chart.update();
  }
}

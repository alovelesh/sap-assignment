/********** Angular Dependency **********/
import { Component, OnInit, OnDestroy } from '@angular/core';
/********** Third Party **********/
import { Chart } from 'chart.js';
/********** Models **********/
import { IPost } from './../../services/models';
/********** Services **********/
import { CommonService } from './../../services/common/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-id-votes-graph',
  templateUrl: './id-votes-graph.component.html',
  styleUrls: ['./id-votes-graph.component.scss']
})
export class IdVotesGraphComponent implements OnInit, OnDestroy {

  Linechart: any;
  isHide = true;
  labels: string[] = [];
  data: number[] = [];
  graphSubcription$: Subscription;

  constructor(
    private commonService: CommonService
  ) {
    this.graphSubcription$ = this.commonService.updateGraph.subscribe((res: IPost[]) => {
      this.labels = [];
      this.data = [];
      for (const ob of res) {
        if (ob.title && !ob.isHide) {
          this.labels.push(ob.objectID);
          this.data.push(ob.points);
        }
      }
      if (this.Linechart && this.Linechart.data) {
        this.Linechart.data.labels = this.labels;
        this.Linechart.data.datasets[0].data = this.data;
        this.Linechart.update();
      }
      this.isHide = false;
    });
  }

  ngOnInit(): void {
    this.createLineChart();
  }

  ngOnDestroy() {
    this.graphSubcription$.unsubscribe();
  }

  createLineChart() {
    this.Linechart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            borderColor: '#245b89',
            backgroundColor: 'rgba(255,255,255, 0)',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        elements: {
          line: {
            tension: 0
          }
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'ID',
              fontStyle: 'bold',
              fontSize: '16',
              fontColor: 'black',
            },
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Votes',
              fontStyle: 'bold',
              fontSize: '16',
              fontColor: 'black'
            }
          }],
        }
      }
    });
  }

}

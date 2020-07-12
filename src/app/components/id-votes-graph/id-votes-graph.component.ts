/********** Angular Dependency **********/
import { Component, OnInit } from '@angular/core';
/********** Third Party **********/
import { Chart } from 'chart.js';
/********** Models **********/
import { IPost } from './../../services/models';
/********** Services **********/
import { CommonService } from './../../services/common/common.service';

@Component({
  selector: 'app-id-votes-graph',
  templateUrl: './id-votes-graph.component.html',
  styleUrls: ['./id-votes-graph.component.scss']
})
export class IdVotesGraphComponent implements OnInit {

  Linechart: any = [];
  isHide = true;

  constructor(
    private commonService: CommonService
  ) {
    this.commonService.updateGraph.subscribe((res: IPost[]) => {
      const ids = [];
      const votes = [];
      for (const ob of res) {
        if (ob.title && !ob.isHide) {
          ids.push(ob.objectID);
          votes.push(ob.points);
        }
      }
      this.Linechart.data.labels = ids;
      this.Linechart.data.datasets[0].data = votes;
      this.Linechart.update();
      this.isHide = false;
    });
  }

  ngOnInit(): void {
    this.Linechart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            borderColor: 'blue',
            backgroundColor: 'rgba(255,255,255, 0)',
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}

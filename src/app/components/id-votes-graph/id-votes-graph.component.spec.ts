import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CommonService } from './../../services/common/common.service';

import { IdVotesGraphComponent } from './id-votes-graph.component';

describe('IdVotesGraphComponent', () => {
  let component: IdVotesGraphComponent;
  let fixture: ComponentFixture<IdVotesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdVotesGraphComponent ],
      providers: [ CommonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdVotesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', inject([CommonService], (
    commonService: CommonService
  ) => {
    commonService.updateGraph.next([{
      title: 'A',
      author: '',
      points: 1,
      num_comments: 1,
      created_at_i: 1,
      objectID: '1',
      isHide: false
    }, {
      title: 'B',
      author: '',
      points: 1,
      num_comments: 1,
      created_at_i: 1,
      objectID: '2',
      isHide: false
    }]);
    expect(component.isHide).toBe(false);
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdVotesGraphComponent } from './id-votes-graph.component';

describe('IdVotesGraphComponent', () => {
  let component: IdVotesGraphComponent;
  let fixture: ComponentFixture<IdVotesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdVotesGraphComponent ]
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
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsWithGraphComponent } from './posts-with-graph.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PostsWithGraphComponent', () => {
  let component: PostsWithGraphComponent;
  let fixture: ComponentFixture<PostsWithGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsWithGraphComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsWithGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

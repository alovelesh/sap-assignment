import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsWithGraphComponent } from './posts-with-graph.component';

describe('PostsWithGraphComponent', () => {
  let component: PostsWithGraphComponent;
  let fixture: ComponentFixture<PostsWithGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsWithGraphComponent ]
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

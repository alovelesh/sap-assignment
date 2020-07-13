import { Subject } from 'rxjs';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoaderService } from './../../services/loader/loader.service';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      providers: [
        LoaderService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showLoader flag', inject([LoaderService], (
    loaderService: LoaderService
  ) => {
    loaderService.showLoader(true);
    expect(component.showLoaderImage).toBe(true);
  }));
});

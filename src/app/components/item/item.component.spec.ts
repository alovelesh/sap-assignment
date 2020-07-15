import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { LoaderService } from './../../services/loader/loader.service';
import { ApiService } from './../../services/api/api.service';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ItemComponent ],
      providers: [
        {
          provide: LoaderService,
          useValue: {
            showLoader: jasmine.createSpy('showLoader'),
          }
        },
        {
          provide: ApiService,
          useValue: {
            items: {
              getRemove: jasmine.createSpy('getRemove').and.returnValue(of({}))
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Subject, of, throwError } from 'rxjs';

import { CommonService } from '../../services/common/common.service';
import { ApiService } from './../../services/api/api.service';
import { LoaderService } from './../../services/loader/loader.service';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PostsComponent ],
      providers: [
        {
          provide: CommonService,
          useValue: {
            getLocalPostData: jasmine.createSpy('getLocalPostData').and.returnValue({
              1: {
                isHide: true
              }
            }),
            updateGraph: new Subject(),
            deletePost: jasmine.createSpy('deletePost').and.returnValue(of({})),
            upvotePost: jasmine.createSpy('upvotePost').and.returnValue(of(2))
          }
        },
        {
          provide: LoaderService,
          useValue: {
            showLoader: jasmine.createSpy('showLoader'),
          }
        },
        {
          provide: ApiService,
          useValue: {
            search: {
              getRemove: jasmine.createSpy('getRemove').and.returnValue(of({
                page: 0,
                nbPages: 20,
                hits: [{
                  title: '',
                  author: '',
                  points: 1,
                  num_comments: 1,
                  created_at_i: 1,
                  objectID: '1',
                  isHide: false
                }, {
                  title: '',
                  author: '',
                  points: 1,
                  num_comments: 1,
                  created_at_i: 1,
                  objectID: '2',
                  isHide: false
                }]
              }))
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hide', () => {
    it('should hide post', () => {
      const input = {
        title: '',
        author: '',
        points: 1,
        num_comments: 1,
        created_at_i: 1,
        objectID: '',
        isHide: false
      };
      component.hide(input);
      expect(input.isHide).toBe(true);
    });

    it('should update graph data', inject([CommonService], (
      commonService: CommonService
    ) => {
      const input = {
        title: '',
        author: '',
        points: 1,
        num_comments: 1,
        created_at_i: 1,
        objectID: '',
        isHide: false
      };
      spyOn(commonService.updateGraph, 'next');
      component.hide(input);
      expect(commonService.updateGraph.next).toHaveBeenCalled();
    }));

    it('should call error function', inject([CommonService], (
      commonService: CommonService
    ) => {
      const input = {
        title: '',
        author: '',
        points: 1,
        num_comments: 1,
        created_at_i: 1,
        objectID: '',
        isHide: false
      };
      spyOn(component, 'error');
      commonService.deletePost = jasmine.createSpy('deletePost').and.returnValue(throwError(''));
      component.hide(input);
      expect(component.error).toHaveBeenCalled();
    }));
  });

  describe('upVote', () => {
    it('should update vote count', () => {
      const input = {
        title: '',
        author: '',
        points: 1,
        num_comments: 1,
        created_at_i: 1,
        objectID: '',
        isHide: false
      };
      component.upVote(input);
      expect(input.points).toEqual(2);
    });

    it('should update graph data', inject([CommonService], (
      commonService: CommonService
    ) => {
      const input = {
        title: '',
        author: '',
        points: 1,
        num_comments: 1,
        created_at_i: 1,
        objectID: '',
        isHide: false
      };
      spyOn(commonService.updateGraph, 'next');
      component.upVote(input);
      expect(commonService.updateGraph.next).toHaveBeenCalled();
    }));

    it('should call error function', inject([CommonService], (
      commonService: CommonService
    ) => {
      const input = {
        title: '',
        author: '',
        points: 1,
        num_comments: 1,
        created_at_i: 1,
        objectID: '',
        isHide: false
      };
      spyOn(component, 'error');
      commonService.upvotePost = jasmine.createSpy('upvotePost').and.returnValue(throwError(''));
      component.upVote(input);
      expect(component.error).toHaveBeenCalled();
    }));
  });

  describe('getPosts', () => {
    it('should show loader on API call', inject([LoaderService], (
      loaderService: LoaderService
    ) => {
      component.getPosts(0);
      expect(loaderService.showLoader).toHaveBeenCalledWith(true);
    }));

    it('should set current page value through API response', () => {
      component.getPosts(0);
      expect(component.currentPage).toEqual(0);
    });

    it('should update graph data', inject([CommonService], (
      commonService: CommonService
    ) => {
      spyOn(commonService.updateGraph, 'next');
      component.getPosts(0);
      expect(commonService.updateGraph.next).toHaveBeenCalled();
    }));

    it('should combine API response data with local storage data', () => {
      component.getPosts(0);
      expect(component.posts[0].isHide).toBe(true);
    });
  });

  describe('error', () => {
    it('should log error on console', () => {
      console.log = jasmine.createSpy('log');
      const input = {
        message: 'invalid request'
      };
      component.error(input);
      expect(console.log).toHaveBeenCalledWith('Something went wrong!!', input);
    });
  });
});

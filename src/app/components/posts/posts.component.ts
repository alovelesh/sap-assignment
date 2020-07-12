/********** Angular Dependency **********/
import { Component, OnInit } from '@angular/core';
/********** rxjs **********/
import { finalize } from 'rxjs/operators';
/********** Services **********/
import { ApiService } from './../../services/api/api.service';
import { LoaderService } from './../../services/loader/loader.service';
import { CommonService } from '../../services/common/common.service';
/********** Models **********/
import { IPost } from '../../services/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[] = [];
  hitsPerPage = 20;
  currentPage = 0;
  maxPages = 0;

  constructor(
    private api: ApiService,
    private commonService: CommonService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.getPosts(this.currentPage);
  }

  getPosts(page) {
    this.loaderService.showLoader(true);
    this.api.search.getRemove(null, {
      page,
      hitsPerPage: this.hitsPerPage
    }).pipe(
      finalize(() => {
        this.loaderService.showLoader(false);
      })
    ).subscribe(res => {
      this.currentPage = res.page;
      this.maxPages = res.nbPages - 1;
      const localData = this.commonService.getLocalPostData();
      if (Object.keys(localData).length) {
        for (const ob of res.hits) {
          if (localData[ob.objectID]) {
            Object.assign(ob, localData[ob.objectID]);
          }
        }
      }
      this.posts = res.hits;
      this.commonService.updateGraph.next(this.posts);
    });
  }

  hide(post: IPost) {
    this.commonService.deletePost(post.objectID).subscribe(() => {
      post.isHide = true;
      this.commonService.updateGraph.next(this.posts);
    }, (err) => {
      console.log('Something went wrong!!', err);
    });
  }

  upVote(post: IPost) {
    this.commonService.upvotePost(post.objectID, post.points).subscribe(res => {
      post.points = res;
      this.commonService.updateGraph.next(this.posts);
    });
  }

}

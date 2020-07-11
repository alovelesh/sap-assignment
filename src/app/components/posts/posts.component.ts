/********** Angular Dependency **********/
import { Component, OnInit } from '@angular/core';
/********** rxjs **********/
import { finalize } from 'rxjs/operators';
/********** Services **********/
import { ApiService } from './../../services/api/api.service';
import { CommonService } from '../../services/common/common.service';
/********** Models **********/
import { IPost } from '../../services/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showLoader = false;
  posts: IPost[] = [];

  constructor(
    private api: ApiService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.showLoader = true;
    this.api.search.getRemove(null, {
      page: 0,
      hitsPerPage: 20
    }).pipe(
      finalize(() => {
        this.showLoader = false;
        console.log('Finalize method executed before "Data available" (or error thrown)');
      })
    ).subscribe(res => {
      this.posts = res.hits;
      const localData = this.commonService.getLocalPostData();
      if (Object.keys(localData).length) {
        for (const ob of this.posts) {
          if (localData[ob.objectID]) {
            Object.assign(ob, localData[ob.objectID]);
          }
        }
      }
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

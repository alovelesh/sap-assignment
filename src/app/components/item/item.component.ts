/********** Angular Dependency **********/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/********** rxjs **********/
import { Subscription } from 'rxjs';
/********** Services **********/
import { LoaderService } from './../../services/loader/loader.service';
import { ApiService } from './../../services/api/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  item: any;

  constructor(
    private api: ApiService,
    private loaderService: LoaderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.getItem(id);
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getItem(id) {
    this.loaderService.showLoader(true);
    this.subscription.add(this.api.items.getRemove(null, {}, {id}).subscribe(res => {
      this.loaderService.showLoader(false);
      this.item = res;
      console.log('Item Response', res);
    }, () => {
      this.loaderService.showLoader(false);
    }));
  }

}

/********** Angular Dependency **********/
import { Component } from '@angular/core';
/********** Services **********/
import { LoaderService } from './../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  showLoaderImage = false;

  constructor(
    private loaderService: LoaderService
  ) {
    this.loaderService
      .getLoader()
      .subscribe((res) => (this.showLoaderImage = res));
  }

}

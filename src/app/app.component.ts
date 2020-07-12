/********** Angular Dependency **********/
import { Component } from '@angular/core';
/********** Services **********/
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sapient-assignment';
  showLoaderImage = false;

  constructor(
    private loaderService: LoaderService
  ) {
    this.loaderService
      .getLoader()
      .subscribe((res) => (this.showLoaderImage = res));
  }
}

// remove vertical line from graph
// set graph heigh
// next and previous
// hide
// upvote
// table UI
// Responsive
// Test cases

// Steps to add Angular Universal
// 1. ng add @nguniversal/express-engine --clientProject sapient-assignment

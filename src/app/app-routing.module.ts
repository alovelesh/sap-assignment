import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsWithGraphComponent } from './components/posts-with-graph/posts-with-graph.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: PostsWithGraphComponent
}, {
  path: 'user/:name',
  component: UserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

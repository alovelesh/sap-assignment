import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsWithGraphComponent } from './components/posts-with-graph/posts-with-graph.component';
import { UserComponent } from './components/user/user.component';
import { ItemComponent } from './components/item/item.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: PostsWithGraphComponent
}, {
  path: 'user/:name',
  component: UserComponent
}, {
  path: 'item/:id',
  component: ItemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

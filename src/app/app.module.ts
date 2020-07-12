import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { IdVotesGraphComponent } from './components/id-votes-graph/id-votes-graph.component';

import { DateAgoPipe } from './pipe/date-ago/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    IdVotesGraphComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

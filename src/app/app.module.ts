/********** Angular Dependency **********/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
/********** Routing Module **********/
import { AppRoutingModule } from './app-routing.module';
/********** Components **********/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PostsWithGraphComponent } from './components/posts-with-graph/posts-with-graph.component';
import { PostsComponent } from './components/posts/posts.component';
import { IdVotesGraphComponent } from './components/id-votes-graph/id-votes-graph.component';
import { UserComponent } from './components/user/user.component';
/********** Pipe **********/
import { DateAgoPipe } from './pipe/date-ago/date-ago.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    PostsWithGraphComponent,
    PostsComponent,
    IdVotesGraphComponent,
    UserComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

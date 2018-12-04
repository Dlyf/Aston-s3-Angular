import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';

const routes: Routes = [
  { path: 'list', component: ListeArticlesComponent },
  { path: 'detail', component: ListeArticlesComponent },
  { path: '', component: ListeArticlesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ListeArticlesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

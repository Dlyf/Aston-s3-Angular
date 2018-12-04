import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AstonComponent } from './aston/aston.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  // { path: 'list', component: PostListComponent },
  // { path: 'detail', component:PostlistItemComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AstonComponent,
    StagiaireComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

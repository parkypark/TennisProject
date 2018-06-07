import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { pageNonFoundComponent } from './pageNonFound/pageNonFound.component';


import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {path: 'main', component: IndexComponent},
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: pageNonFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    pageNonFoundComponent,
    EditComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing:true }
    ),
    BrowserModule
  ],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }

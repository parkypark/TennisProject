import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { pageNonFoundComponent } from './pageNonFound/pageNonFound.component';

import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AppService } from './service/api.service';
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
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing:true }
    ),
    BrowserModule
  ],
  bootstrap: [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }

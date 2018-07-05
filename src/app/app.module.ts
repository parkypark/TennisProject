import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AppComponent } from './app.component';
import { pageNonFoundComponent } from './pageNonFound/pageNonFound.component';
import { ShoppingItem } from 'app/model/shoppingItem';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { AppService } from './service/api.service';
const appRoutes: Routes = [
  {path: 'main', component: IndexComponent},
  {path: 'intro', component: IntroComponent},
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
    IntroComponent,
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
  providers: [AppService, ShoppingItem]
})
export class AppModule { }

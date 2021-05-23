import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'search/:news-search', component: HomeComponent },
  { path: 'detail/:title-article', component: ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

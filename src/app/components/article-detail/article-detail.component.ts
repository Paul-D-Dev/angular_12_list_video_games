import { HttpService } from './../../services/http.service';
import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from './../../models/article.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, DoCheck, OnDestroy {

  article: Article;
  articlesListFromSource: Article[] = [];
  articleSub$: Subscription;

  constructor(private router: Router,
              private httpService: HttpService) { }

  ngOnInit(): void {
    let state = window.history.state?.article
    if (state) {
      this.article = state
    } else {
      this.router.navigateByUrl('/');
    }

    this.getMoreArticles(this.article.source.name);
  }

  getMoreArticles(source: string) {
    this.articleSub$ = this.httpService.getMoreArticles(source)
    .subscribe(d => this.articlesListFromSource = d.articles);
  }

  ngDoCheck(): void {
    let state = window.history.state?.article
    this.article = state
  }

  ngOnDestroy(): void {
    this.articleSub$.unsubscribe();
  }

}

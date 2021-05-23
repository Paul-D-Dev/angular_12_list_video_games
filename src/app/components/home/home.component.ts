import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Article } from './../../models/article.model';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  category: string;
  endPoints = 'top-headlines';
  articleList: Article[] = [];
  routeSub$: Subscription;
  articleSub$: Subscription;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => console.log(p));

    this.routeSub$ = this.httpService.getHeadLinesArticleList(this.endPoints)
      .subscribe((d : APIResponse<Article>) => {
        this.articleList = d.articles;
    });
  }

  searchArticles(category: string) {
    let params = {};
    if (category !== "") {
      params['category'] = category
    }

    this.articleSub$ = this.httpService.getHeadLinesArticleList(this.endPoints, 'us', params)
      .subscribe((d : APIResponse<Article>) => {
        this.articleList = d.articles;
    });
  }

  ngOnDestroy(): void {
    if (this.articleSub$) {
      this.articleSub$.unsubscribe();
    }

    if (this.routeSub$) {
      this.routeSub$.unsubscribe();
    }
  }

}

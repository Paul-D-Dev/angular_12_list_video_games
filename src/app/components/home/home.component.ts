import { Article, APIResponse } from './../../models/article.model';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sort: string;
  articleList: Article[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getHeadLinesArticleList('top-headlines')
      .subscribe((d : APIResponse<Article>) => {
        this.articleList = d.articles;
        console.log(this.articleList);

    });
  }

}

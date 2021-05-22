import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse, Article } from './../../models/article.model';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  category: string;
  endPoints = 'top-headlines';
  articleList: Article[] = [];

  constructor(private httpService: HttpService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => console.log(p));

    this.httpService.getHeadLinesArticleList(this.endPoints)
      .subscribe((d : APIResponse<Article>) => {
        this.articleList = d.articles;
    });
  }

  searchArticles(category: string) {
    let params = {};
    if (category !== "") {
      params['category'] = category
    }

    this.httpService.getHeadLinesArticleList(this.endPoints, 'us', params)
      .subscribe((d : APIResponse<Article>) => {
        this.articleList = d.articles;
    });
  }

}

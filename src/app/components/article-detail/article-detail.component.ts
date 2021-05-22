import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from './../../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article: Article;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let state = window.history.state?.article
    if (state) {
      this.article = state
    } else {
      this.router.navigateByUrl('/');
    }
  }

}

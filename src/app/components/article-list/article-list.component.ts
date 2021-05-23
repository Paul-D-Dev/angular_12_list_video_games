import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent{

  @Input() articleList: Article[];
  @Input() class: string;

  constructor(private router: Router) { }

  openArticleDetails(index: number) {
    this.router.navigate([
      'detail'
    ],
      {
        state : {
          article: this.articleList[index]
        }
      }
    )
  }

}

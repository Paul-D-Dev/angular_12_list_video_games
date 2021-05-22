import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Article } from '../models/article.model';
import { environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getArticleList(endPoints: string, search?: string): Observable<APIResponse<Article>> {
    let params = new HttpParams().set('endPoints', endPoints);

    if (search) {
      params = new HttpParams().set('endPoints', endPoints).set('search', search);
    }

    return this.http.get<APIResponse<Article>>(`${env.API_URL}`, {
      params: params,
    })
  }

  getTopArticleList(endPoints: string, country: string = 'us'): Observable<APIResponse<Article>> {
    let params = new HttpParams().set('country', country);


    return this.http.get<APIResponse<Article>>(env.API_URL + endPoints, {
      params: params,
    })
  }
}

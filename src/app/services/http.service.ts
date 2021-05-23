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

  getHeadLinesArticleList(endPoints: string, country: string = 'us', paramsList?: {}): Observable<APIResponse<Article>> {
    let params = new HttpParams().set('country', country);

    if (paramsList && Object.keys(paramsList).length > 0) {
      for (const param in paramsList) {
        if (Object.prototype.hasOwnProperty.call(paramsList, param)) {
          params = new HttpParams().set(param, paramsList[param])
        }
      }
    }

    return this.http.get<APIResponse<Article>>(env.API_URL + endPoints, {
      params: params,
    })
  }

  getMoreArticles(source: string): Observable<any> {
    source = source.replace(' ', '-');
    const nbArticles = 3;
    const params = new HttpParams()
                      .set('sources', source)
                      .set('pageSize', nbArticles);

    return this.http.get(env.API_URL + 'top-headlines', { params });
  }

}

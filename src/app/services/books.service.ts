import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  public getBooks(title: string): Observable<any> {
    const params = new HttpParams().set('title', title);
    return this.http.get(`${environment.api_url}`, { params: params });
  }

}

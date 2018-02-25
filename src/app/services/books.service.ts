import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  public getBooks(title: string): Observable<any> {
    const params = new HttpParams().set('title', title);
    return this.http.get('http://openlibrary.org/search.json', { params: params });
  }

}

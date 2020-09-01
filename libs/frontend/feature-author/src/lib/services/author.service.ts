import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Author {
  firstName: string;
  lastName: string;
}

@Injectable({ providedIn: 'root' })
export class AuthorService {
  constructor(private http: HttpClient) {}

  create(author: Author): Observable<Author> {
    return this.http.post<Author>('/api/author', author);
  }
}

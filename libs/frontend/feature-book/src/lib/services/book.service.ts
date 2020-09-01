import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Author {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface Book {
  _id: string;
  name: string;
  isbn: string;
  author: string;
}

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient) {}

  public createBook(payload): Observable<Book> {
    return this.http.post<Book>('api/book', payload);
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('api/book');
  }

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(`api/author/${id}`)
  }

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('api/author');
  }
}

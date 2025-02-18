import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  getBooks(query: string, startIndex: number = 0, maxResults: number = 10): Observable<any> {
    return this.http.get<any>(`${this. API_URL}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`);
  }

  getBookById(id: string): Observable<any> {
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes/${id}`);
  }
}

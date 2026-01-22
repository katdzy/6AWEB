import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(posts => posts.slice(0, 5))); // limit to 5
  }
}

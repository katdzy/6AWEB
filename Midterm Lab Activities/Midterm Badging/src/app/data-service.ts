import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
  author?: string;
  createdAt?: Date;
}

interface PostResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dummyjson.com/posts';
  public getPosts(): Observable<Post[]> {
    return this.http.get<PostResponse>(this.apiUrl).pipe(
      map(response => response.posts)
    );
  }
}

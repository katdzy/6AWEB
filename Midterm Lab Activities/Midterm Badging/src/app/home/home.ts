import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService, Post } from '../data-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  private dataService = inject(DataService);


  latestPosts$: Observable<Post[]> = this.dataService.getPosts().pipe(
    map(posts => posts.slice(0, 5).map(post => ({
      ...post,
      author: `User ${post.userId}`,
      createdAt: new Date()
    })))
  );
}

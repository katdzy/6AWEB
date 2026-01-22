import { Component, OnInit } from '@angular/core';
import { Httpclient } from './httpclient';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  posts: Post[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}

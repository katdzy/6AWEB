import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest, startWith, map, catchError, of, BehaviorSubject } from 'rxjs';
import { DataService, Post } from '../data-service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './service.html',
  styleUrls: ['./service.css']
})
export class Service {
  private dataService = inject(DataService);

  searchControl = new FormControl('', { nonNullable: true });


  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();


  filteredPosts$: Observable<Post[]> = combineLatest([
    this.dataService.getPosts(),
    this.searchControl.valueChanges.pipe(startWith(''))
  ]).pipe(
    map(([posts, searchTerm]) => {
      const term = searchTerm.toLowerCase();
      return posts.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.body.toLowerCase().includes(term)
      );
    }),
    catchError(err => {
      this.errorSubject.next('Failed to load records. Please try again later.');
      return of([]);
    })
  );
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  currentPage = 1;
  totalPages = 1;
  booksPerPage = 12;
  searchQuery: string = '';

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    const startIndex = (this.currentPage - 1) * this.booksPerPage;
    this.bookService.getBooks(this.searchQuery, startIndex, this.booksPerPage).subscribe((data) => {
      this.books = data.items || [];
      this.totalPages = Math.ceil(data.totalItems / this.booksPerPage);
    });
  }

  fetchRandomBooks(): void {
    const randomQueries = ['science', 'fiction', 'history', 'technology', 'art'];
    const randomQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)];
    this.bookService.getBooks(randomQuery, 0, this.booksPerPage).subscribe((data) => {
      this.books = data.items || [];
      this.totalPages = Math.ceil(data.totalItems / this.booksPerPage);
    });
  }

  viewDetails(bookId: string): void {
    this.router.navigate(['/book', bookId]);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchBooks();
    }
  }
}

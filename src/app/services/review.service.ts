import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private reviews: { bookId: string; text: string }[] = [];

  addReview(bookId: string, text: string): void {
    this.reviews.push({ bookId, text });
  }

  getReviews(bookId: string) {
    return this.reviews.filter((review) => review.bookId === bookId);
  }
}

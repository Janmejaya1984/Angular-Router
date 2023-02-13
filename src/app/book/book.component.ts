import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books!: Book[];
  constructor(private bookService: BookService,private router:Router) { }
  getBooks() {
    this.books = this.bookService.getBooks();
  }
  gotoDetail(book: Book): void {
    this.router.navigate(['/detail', book.id]);
  }
  ngOnInit() {
    this.getBooks();
  }
}


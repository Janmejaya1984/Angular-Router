import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  book!: Book;
  error!: any;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.bookService.getBook(params.get('id')).subscribe((book) => {
        this.book = book ?? this.book;
      });
    });
  }
  goBack() {
    window.history.back();
  }
}
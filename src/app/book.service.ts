import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Book } from './book/book';
import { BOOKS } from './book/books-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks(){
    return BOOKS;
  }
  getBook(id:any):Observable<Book>{
    return from( BOOKS.filter((book)=>book.id==id));
  }
}

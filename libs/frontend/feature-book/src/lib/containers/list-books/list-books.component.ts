import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from '../../components/book-dialog/book-dialog.component';

import { Book, BookService, Author } from '../../services/book.service';

@Component({
  selector: 'frontend-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
})
export class ListBooksComponent implements OnInit {
  books: Book[];
  search: string;

  constructor(private service: BookService, public dialog: MatDialog) {}

  ngOnInit() {
    this.service.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  openDialog({ name, isbn, author, _id }: Book) {
    this.service.getAuthor(author).subscribe((author: Author) => {
      this.dialog.open(BookDialogComponent, {
        data: {
          _id: _id,
          name: name,
          isbn: isbn,
          author: author,
        },
        width: '50%',
      });
    });
  }
}

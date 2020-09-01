import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService, Author } from '../../services/book.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'frontend-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
})
export class BookDialogComponent implements OnInit {
  public editMode: boolean;
  public options: Author[] = [];
  public filteredOptions: Observable<Author[]>;

  bookForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    isbn: new FormControl(''),
    author: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private service: BookService
  ) {}

  ngOnInit() {
    this.service.getAuthors().subscribe((authors: Author[]) => {
      this.options = authors;
      this.filteredOptions = this.bookForm.valueChanges.pipe(
        startWith(''),
        map((value) => {
          return this._filter(value);
        })
      );
    });
  }

  displayFn(author: Author): string {
    return author ? `${author.firstName} ${author.lastName}` : '';
  }

  onSubmit() {
    this.bookForm.patchValue({
      author: this.bookForm.value.author._id,
      _id: this.data._id,
    });
    this.service
      .updateBook(this.data._id, this.bookForm.value)
      .subscribe(() => {
        location.reload();
      });
  }

  delete() {
    this.service.deleteBook(this.data._id).subscribe(() => {
      location.reload();
    });
  }

  private _filter(value: { author: string }): Author[] {
    if (!value || !(typeof value.author === 'string')) {
      return;
    }

    const filterValue = (value.author as string).toLowerCase();
    return this.options.filter(
      (option) =>
        `${option.firstName} ${option.lastName}`
          .toLowerCase()
          .indexOf(filterValue) === 0
    );
  }
}

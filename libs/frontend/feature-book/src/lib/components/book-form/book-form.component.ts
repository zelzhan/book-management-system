import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService, Author } from '../../services/book.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'frontend-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  bookForm = new FormGroup({
    name: new FormControl(''),
    isbn: new FormControl(''),
    author: new FormControl(''),
  });

  public options: Author[] = [];
  public filteredOptions: Observable<Author[]>;

  constructor(private service: BookService, private router: Router) {}

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
    this.bookForm.value.author = this.bookForm.value.author._id;
    this.service
      .createBook(this.bookForm.value)
      .subscribe(() => this.router.navigate(['/book/list']));
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

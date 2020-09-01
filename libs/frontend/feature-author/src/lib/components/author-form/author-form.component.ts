import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator } from '@angular/forms';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'frontend-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss'],
})
export class AuthorFormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private service: AuthorService) {}

  onSubmit() {
    this.service
      .create(this.profileForm.value)
      .subscribe((res) => console.log(res));
  }
}

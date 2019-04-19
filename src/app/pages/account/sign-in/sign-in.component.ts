import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AccountService } from 'src/app/shared/services/account.service';
import { SignInModel } from 'src/app/shared/models/signIn.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  validateForm: FormGroup;
  signInModel: SignInModel;

  constructor(
    private formBuilder: FormBuilder,
    private service: AccountService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.validateForm = this.formBuilder.group({
      email: [null, [
          Validators.email
        ]
      ],
      password: [null]
    });
  }

  signIn() {
    if (!this.validateForm.valid) {
      return;
    }

    this.service.signIn(this.signInModel)
      .subscribe(response => {
        localStorage.setItem('token', response);
      },
        error => console.log(error)
    );
  }

}

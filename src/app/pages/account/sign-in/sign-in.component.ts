import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"

import { AccountService } from 'src/app/shared/services/account.service';
import { SignInModel } from 'src/app/shared/models/account/signIn.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  validateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AccountService,
    private router: Router
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
    var signInModel = this.getModelByForm();

    this.service.signIn(signInModel)
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/building/dashboard']);
      },
        error => console.log(error)
    );
  }

  private getModelByForm(): SignInModel {
    var signInModel = new SignInModel();
    signInModel.email = this.validateForm.value.email;
    signInModel.password = this.validateForm.value.password;

    return signInModel;
  }

}

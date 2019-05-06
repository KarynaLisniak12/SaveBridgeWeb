import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"

import { AccountService } from 'src/app/shared/services/account.service';
import { SignUpModel } from 'src/app/shared/models/account/signUp.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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
      password: [null],
      confirmPassword: [null]
    });
  }

  signUp() {
    var signUpModel = this.getModelByForm();

    this.service.signUp(signUpModel)
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/building/dashboard']);
      },
        error => console.log(error)
    );
  }

  private getModelByForm(): SignUpModel {
    var signInModel = new SignUpModel();
    signInModel.email = this.validateForm.value.email;
    signInModel.password = this.validateForm.value.password;
    signInModel.confirmPassword = this.validateForm.value.confirmPassword;

    return signInModel;
  }

}

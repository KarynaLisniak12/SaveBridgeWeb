import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { SignInModel } from '../models/account/signIn.model';
import { SignUpModel } from '../models/account/signUp.model';
import { AuthResponseModel } from '../models/account/authResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = `${environment.ApiEndpoint}account\\`;

  constructor(private http: HttpClient) { }

  signIn(model: SignInModel): Observable<AuthResponseModel> {
    return this.http
      .post<AuthResponseModel>((`${this.url}signin`), model);
  }

  signUp(model: SignUpModel): Observable<AuthResponseModel> {
    return this.http
      .post<AuthResponseModel>((`${this.url}signup`), model);
  }

}

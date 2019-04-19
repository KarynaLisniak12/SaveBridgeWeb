import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { SignInModel } from '../models/signIn.model';
import { SignUpModel } from '../models/signUp.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = `${environment.ApiEndpoint}account\\`;

  constructor(private http: HttpClient) { }

  signIn(model: SignInModel): Observable<string> {
    return this.http
      .post<string>((`${this.url}signin`), model);
  }

  signUp(model: SignUpModel) {
    return this.http
      .post((`${this.url}signup`), model);
  }

}

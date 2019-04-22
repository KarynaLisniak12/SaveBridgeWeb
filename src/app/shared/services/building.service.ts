import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { BuildingModel } from '../models/building/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private url = `${environment.ApiEndpoint}building\\`;

  constructor(private http: HttpClient) { }

  getBuildings(): Observable<Array<BuildingModel>> {
    return this.http
      .get<Array<BuildingModel>>(`${this.url}getAll`);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
 
import { APIResponse } from 'src/app/models/apiResponse';
import { Game } from 'src/app/models/game';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams()
    .set('ordering', ordering);

    if (search) {
      params.set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }
}

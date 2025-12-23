import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private httpClient = inject(HttpClient);


  resourceUrl = environment.resource_url;

  public user(): Observable<unknown> {
    return this.httpClient.get<unknown>(this.resourceUrl + 'user');
  }

  public admin(): Observable<unknown> {
    return this.httpClient.get<unknown>(this.resourceUrl + 'admin');
  }

}

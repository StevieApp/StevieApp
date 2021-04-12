import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateStoryService {

  constructor(private http: HttpClient) { }

  deletesingleFile(filename: any): Observable<HttpEvent<{}>> {
    const params = new HttpParams().set('filename', filename);
    const req = new HttpRequest('DELETE', 'https://us-central1-reaphoster.cloudfunctions.net/app/api/files/deletefile', {
      params: params,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  updateUser(user: any, id: any): Observable<HttpEvent<{}>> {
 
    const params = new HttpParams()
      .set('dbname', 'reap')
      .set('collection', 'users')
      .set('id', id);
 
    const req = new HttpRequest('POST', 'https://us-central1-reaphoster.cloudfunctions.net/app/api/mongo/userupdate', user, {
      reportProgress: true,
      responseType: 'text',
      params: params
    });
 
    return this.http.request(req);
  }

}

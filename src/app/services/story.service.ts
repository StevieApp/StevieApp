import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor( private http: HttpClient ) { }

  getSingleStory(user: any): Observable<HttpEvent<{}>> {
    const params = new HttpParams()
      .set('dbname', 'stevieapp')
      .set('collection', 'stories');
 
    const req = new HttpRequest('POST', 'https://us-central1-reaphoster.cloudfunctions.net/app/api/mongo/customreadcollection', user, {
      reportProgress: true,
      responseType: 'text',
      params: params
    });
 
    return this.http.request(req);
  }
}

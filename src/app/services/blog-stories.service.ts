import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogStoriesService {

  constructor(private http: HttpClient) { }
  getStories(): Observable<HttpEvent<{}>> {
 
    const params = new HttpParams()
      .set('dbname', 'stevieapp')
      .set('collection', 'stories');
 
    const req = new HttpRequest('GET', 
    'https://us-central1-reaphoster.cloudfunctions.net/app/api/mongo/readcollection', {
      reportProgress: true,
      responseType: 'text',
      params: params
    });
 
    return this.http.request(req);
  }
}

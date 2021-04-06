import { HttpEvent, HttpParams, HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateStoryService {

  constructor(private http: HttpClient) { }

  saveImage(file: File, filename: any, myfilename: any): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    
    if(filename != null){
      const params = new HttpParams().set('filename', filename);
      let headers = new HttpHeaders();
      formdata.append('file', file);
      headers.append('Access-Control-Allow-Origin', '*');
  
      const req = new HttpRequest('POST', 'https://us-central1-reaphoster.cloudfunctions.net/app/api/files/upload', formdata, {
        reportProgress: true,
        responseType: 'text',
        params: params,
        headers: headers
      });
  
      return this.http.request(req);
    } else if (myfilename != null){
      const params = new HttpParams().set('myfilename', myfilename);
      let headers = new HttpHeaders();
      formdata.append('file', file);
      headers.append('Access-Control-Allow-Origin', '*');
  
      const req = new HttpRequest('POST', 'https://us-central1-reaphoster.cloudfunctions.net/app/api/files/upload', formdata, {
        reportProgress: true,
        responseType: 'text',
        params: params,
        headers: headers
      });
      return this.http.request(req);
    } else {
      let headers = new HttpHeaders();
      formdata.append('file', file);
      headers.append('Access-Control-Allow-Origin', '*');
  
      const req = new HttpRequest('POST', 'https://us-central1-reaphoster.cloudfunctions.net/app/api/files/upload', formdata, {
        reportProgress: true,
        responseType: 'text',
        headers: headers
      });
      return this.http.request(req);
    }
  }

  saveStory(user: JSON): Observable<HttpEvent<{}>> {
    const params = new HttpParams()
      .set('dbname', 'stevieapp')
      .set('collection', 'stories');
 
    const req = new HttpRequest('POST', 'https://us-central1-reaphoster.cloudfunctions.net/app/api/mongo/write', user, {
      reportProgress: true,
      responseType: 'text',
      params: params
    });
    return this.http.request(req);
  }
}
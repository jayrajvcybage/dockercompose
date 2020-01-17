import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {
    constructor(private http: HttpClient) {
    }
    messages: string[];
    executeHelloWorldService(): Observable<boolean> {
      return this.http.get<string[]>('http://webapi/api/values').pipe(
        map((data: string[]) => {
          this.messages = data;
          return true;
        }));
        


    }
}


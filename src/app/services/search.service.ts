import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})


export class SearchService {


  URL = 'https://api.giphy.com/v1/gifs/search'
  ru = 'https://api.giphy.com/v1/gifs/search'

  url = 'https://api.giphy.com/v1/gifs';
  apiKey = '6BlOJj8efv4EyplYtbV1Sv4xuHR8jJJi';


  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();
  constructor(public _http:HttpClient) {  }


  changeMessage(message: string){
    this.messageSource.next(message)

    this.searches(message)
    
  }


  searches(title:string){
    return this._http.get(`${this.URL}?&api_key=${this.apiKey}&q=${encodeURI(title)}`)

  }
  // xT4uQulxzV39haRFjG
  newId
  getDetails(id:any): Observable<any>{
    this.newId = ++id
    console.log(this.newId)
    return this._http.get(`${this.url}/${++id}?&api_key=${this.apiKey}`)
    // return this._http.get(`${this.url}${id}?&apikey=${this.apiKey}`)
   
  }

  getDetail(id): Observable<any> {
    console.log(id)
    const rl = `${this.url}/${id}?&api_key=${this.apiKey}`;
    // return this._http.get(`${this.url}/${id}?&api_key=${this.apiKey}`)

    return this._http.get<any>(rl).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      // catchError(console.log(`getHero id=${id}`))
    );
  }
  
}

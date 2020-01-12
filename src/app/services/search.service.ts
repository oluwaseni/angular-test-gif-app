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
  
  getDetails(id){
    console.log(id)
    return this._http.get(`${this.url}/${++id}?&api_key=${this.apiKey}`)
    // return this._http.get(`${this.url}${id}?&apikey=${this.apiKey}`)
   
  }


  
}

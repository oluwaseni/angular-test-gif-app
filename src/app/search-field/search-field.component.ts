import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    results: Observable<any>;
    searchTerm= '';
    result: any
    giphy:any
    message:string;

    constructor(private _service:SearchService) {
    }


    ngOnInit() {

        this._service.currentMessage.subscribe(message => this.message = message)
    }

    changes(){
        this._service.changeMessage(this.searchTerm)
    }

  searchChanges(){
    this._service.searches(this.searchTerm).subscribe(res=> {
        this.result = res['data'];
        console.log(this.result);
        console.log(this.result['0']['images']['downsized'].url);

      });
  
  }


  

}

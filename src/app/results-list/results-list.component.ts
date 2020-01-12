import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  results: Observable<any>;
  searchTerm= '';
  name = 'Search Field';
  result: any
  message:string;
  oldVar:any

  @Input() refresh: boolean


  constructor(private _service:SearchService, public _route:Router) { }

  ngOnInit() {
    this.oldVar = this.change()
    this.searchChanges()

  }

  
 change(){
  this._service.currentMessage.
  subscribe(message =>
     {this.message = message
      
      this.searchChanges()
    }
     
    )
}

// this checks if the search value has changed

  searchChanges(){
    this._service.searches(this.message).subscribe(res=> {
        this.result = res['data'];
        console.log(this.result);
        console.log(this.result['0']['images']['downsized'].url);

      });
}


giphy(id){
  console.log(id)
  this._route.navigate(['giphy/'+id])
}

}
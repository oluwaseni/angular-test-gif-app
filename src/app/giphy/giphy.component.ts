import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  info:any;
  len:any;

  constructor(private _service:SearchService,     private _activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit() {

      let id = this._activatedRoute.snapshot.paramMap.get(`id`);
      console.log(id)
      this._service.getDetails(id)
      .subscribe(result =>{
        console.log('details:', result);
        this.info = result;
      

      
    });

    


  

  }


  another(){
    let id:any = +this._activatedRoute.snapshot.paramMap.get('id');

    this._service.getDetails(id)
    .subscribe(result =>{
      console.log('details:', result);
      this.info = result;
    });
    this.len = this.info.length
    console.log(this.len)
  }
}

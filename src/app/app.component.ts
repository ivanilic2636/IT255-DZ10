import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',

})
export class AppComponent {

  private vozaci = 'http://localhost/angular/getDriver.php';
  data: Object[];
  name: String = "";
  constructor(private http: Http){
    this.http.get(this.vozaci).subscribe(
      data=>{
        this.data = JSON.parse(data["_body"]);
      },
      err=>console.log(err.text()),
    ()=>{

    }
  );
  }

}

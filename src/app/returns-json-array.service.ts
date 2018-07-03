import { Injectable } from '@angular/core';
import { Http, Response ,RequestOptions, Request, Headers} from '@angular/http';
import { Observable } from 'rxjs';




@Injectable()
export class ReturnsJsonArrayService {

  constructor(private http: Http) {}

  getPeople(): Observable<any> {
    let headers = new Headers ({
  		'Content-Type' : 'application/json',
  	
  	});
            return this.http.get('./assets/data/student.json', {headers: headers});	 
       
  }

 
}


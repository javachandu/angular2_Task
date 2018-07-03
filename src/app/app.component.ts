import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Student} from './Student'
import { ReturnsJsonArrayService } from './returns-json-array.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReturnsJsonArrayService]
})
export class AppComponent implements OnInit {
  
  title = 'StudentResults';
  students:Student[];
  data: Observable<Array<any>>;

  constructor(private service: ReturnsJsonArrayService) {
	
	  this.service.getPeople().subscribe(
  		res => {
        this.data=res.json();
         this.data.forEach(function (data) {
          var name = data['name']; 
          var maths= data['maths'];
          var english= data['maths'];
          var science= data['maths'];

        
      });
        
      },
  		error => {
  			console.log(error);
  		}
  	);
   
   // this.data = service.getPeople();
    //console.log("AppComponent.data:" + this.data);
  }

  ngOnInit() 
    {
      console.log("hello",this.so)
      //this.data.forEach(function (data) {
        //var name = data['name']; 
       // console.log(name)
      //});
    }

    
  

}

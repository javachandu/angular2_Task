import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './Student'
import { ReturnsJsonArrayService } from './returns-json-array.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReturnsJsonArrayService]
})
export class AppComponent   {
  
  title = 'StudentResults';
  students: Student[] = [];
  stds: any[];
  //students1:Student[];
   totalMarks:number[]=[];
  data: Observable<Array<any>>;

  constructor(private service: ReturnsJsonArrayService) {
	
	  this.service.getPeople().subscribe(
  		res => {
        this.data=res.json();
        for (var v in this.data) // for acts as a foreach  
        {
          var data=this.data[v];
          var name = data['name']; 
         // console.log(name);
          var rollNumber = data['rollNumber']; 
          var maths= parseInt(data['marks']['Maths']);
          var english= parseInt(data['marks']['English']);
          var science= parseInt(data['marks']['Science']);

          var marks = (maths+english+science);
          this.totalMarks[v]=marks;
          console.log('called'+this.totalMarks)
          //this.totalMarks.push(marks);
          var status="fail";
          var color='red';
          if(maths > 20 && science > 20 && english > 20){
            status="pass";
            color="none";
          }
          
          var std = new Student(name,marks,rollNumber);
          std.color=color;
          std.status=status;
          this.students.push(std);
        }
         
        this.test();
      },
  		error => {
  			console.log(error);
  		}
  	);
   
  }


    test() 
    {
      
      var max = Math.max( ...this.totalMarks);
      for(var i=0; i< this.students.length;i++){
        if(max==this.students[i].marks){
          this.students[i].color="green";
          this.students[i].status="Topper";
        }
      }

      this.students.sort( function(name1, name2) {
        if ( name1.name < name2.name ){
          return -1;
        }else if( name1.name > name2.name ){
            return 1;
        }else{
          return 0;	
        }
    });
      
    }
    
  

}

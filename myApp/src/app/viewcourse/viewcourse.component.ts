import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  myData:Array<object>=[];
  status = false;

  constructor(private api:ApiService) { }

  ngOnInit() {

    this.featchValues();
  }
  
  public featchValues(){

    return this.api.viewCourses().subscribe( (response:Array<object>)=>{

      this.myData = response;
      this.status = true;
      console.log(response);

    });
    
  }

}

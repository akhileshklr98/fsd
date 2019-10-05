import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addCourse(data){

    return this.http.post('https://dummyapilist.herokuapp.com/addcourse',data);
  }

  viewCourses(){
    
    return this.http.get('https://dummyapilist.herokuapp.com/getcourses');
  }
}

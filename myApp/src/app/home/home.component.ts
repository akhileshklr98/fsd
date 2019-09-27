import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'myApp';
  name = "Akhilesh";
  course = "Full Stack Development";

  btnClick = false;
  constructor(){
    setTimeout( ()=>{
      this.btnClick=true;
    },5000);
  }

  changeCourse=()=>{
    this.course="Means Stack Development";
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  name = "Akhilesh";
  course = "Full Stack Development";

  btnClick = false;
  constructor(){
    setTimeout( ()=>{
      this.btnClick=true;
    },5000);
  }
}

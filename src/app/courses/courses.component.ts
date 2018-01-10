import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
 title="List of courses";
 courses;
  isActive=true;
  email="me@gmail.com";
  para="ggggg";
  constructor(service : CoursesService) { 
  this.courses=service.getcourses();
  }
 onclick() {
   alert("button clicked");
 }
 
 keyup() {
   console.log(this.email);
 }
categories=[
  {Name : "Developement", Id: "1"},
  {Name : "Art", Id: "2"},
  {Name : "Language", Id: "3"}
  
];
  

}

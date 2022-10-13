import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "angular_lab3"
  student:string[] = [];
  getData(data:any){
    this.student.push(data);
  }

} // end app component

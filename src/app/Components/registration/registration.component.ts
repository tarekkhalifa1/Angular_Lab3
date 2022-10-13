import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  name: string = "";
  age: number = 0;
  id: number = 1;
  errorName: string = "";
  errorAge: string = "";
  successMsg: string = "";

  @Output() myEvent = new EventEmitter();

  addStudent() {
    // validate on name 
    if (this.name.length < 3) {
      this.successMsg = "";
      this.errorAge = "";
      return this.errorName = "Invalid name";
    }

    // validate on age 
    if (this.age < 20 || this.age > 40) {
      this.successMsg = "";
      this.errorName = "";
      return this.errorAge = "age must be between (20 : 40)";
    }
    // save student
    this.errorName = "";
    this.errorAge = "";
    this.myEvent.emit({ id: this.id, name: this.name, age: this.age }); // send student data obj to home component
    this.id++;
    this.name = "";
    this.age = 0;
    return this.successMsg = "Student added successfully";
  }

} // end registration class

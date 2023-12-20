import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  data={
    to:"",
    subject:"",
    message:""
  }
  constructor(){}

  submitform()
  {
    alert("form is running")
    console.log("try to submit form");
  }
}

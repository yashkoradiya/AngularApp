import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-my-form-reactive',
  templateUrl: './my-form-reactive.component.html',
  styleUrls: ['./my-form-reactive.component.css']
})
export class MyFormReactiveComponent implements OnInit {
  form !: any;
  fname !: string;
  lname !: string;
  
  constructor() { }

  ngOnInit() {
    this.form = new FormControl({
      firstname: new FormControl("", Validators.compose([Validators.required,Validators.minLength(3)])),
       lastname: new FormControl("shy")
    })
  }

  showValue(user:any){
    this.fname = user.firstname;
    this.lname = user.lastname;
    console.log(user);
  }

}

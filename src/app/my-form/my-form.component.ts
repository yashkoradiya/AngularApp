import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

 

  constructor(private router: Router) { }

  showValue(user:any){

    console.log(user);}

  ngOnInit(): void {
  }

}

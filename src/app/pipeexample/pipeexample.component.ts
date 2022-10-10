import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {

  name = "SONATA";

  day= new Date();

  price = 500;
 
  arr = [7,4,5,6];
  arr1= ['a', 'b', 'c'];


  constructor() { }

  ngOnInit(): void {
  }

}

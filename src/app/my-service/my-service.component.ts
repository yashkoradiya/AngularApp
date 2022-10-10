import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/SimpleTestCase/MyService/MyService';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css'],
  providers :[MyService]
})
export class MyServiceComponent implements OnInit {
  name !:string;
  

  constructor(private serv:MyService) { 
    this.name = serv.getName();
  }

  ngOnInit(): void {
  }

}

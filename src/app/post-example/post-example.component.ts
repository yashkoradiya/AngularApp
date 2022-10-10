import { Component, OnInit } from '@angular/core';
import { DataService } from './Data-Service';
import { postData } from './PostdataObj';

@Component({
  selector: 'app-post-example',
  templateUrl: './post-example.component.html',
  styleUrls: ['./post-example.component.css']
})
export class PostExampleComponent implements OnInit {
  data !:string;
  posData !: postData;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  sendData(){
    this.posData = new postData();
    this.posData.body = "test data2";
    this.posData.title = "Some Title";
    this.posData.userId = 13;
    this.dataService.addPost(this.posData)
    .subscribe( data =>{console.log(data)});
  }

}

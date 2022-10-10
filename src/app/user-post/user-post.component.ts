import { Component, OnInit } from '@angular/core';
import { userpostData } from './PostUser';
import { UserDataService } from './PostUserService';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  data!: string;

  posData!: userpostData

  form:any;
  constructor(private dataService: UserDataService) { }

  ngOnInit(): void {
  }
  sendData(){

    this.posData=new userpostData();

    this.posData.userId= 0;

    this.posData.userUserName="user name";

    this.posData.userFirstName="first name";

    this.posData.userLastName="last name"

    this.posData.userEmail="email"

    this.posData.userPassword="password"

    this.posData.userGender="gender"

    this.dataService.addPost(this.posData)

    .subscribe(data=>{console.log(data)})

  }

  showValue(user:any){

   

    this.posData.userUserName=user.UserName;

    this.posData.userFirstName=user.FirstName;

    this.posData.userLastName=user.LastName

    this.posData.userEmail=user.Email

    this.posData.userPassword=user.Password

    this.posData.userGender=user.Gender


    console.log(user);

  }

}

import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { userpostData } from "./PostUser";





@Injectable({

    providedIn: 'root'

})



export class UserDataService{

    postUrl: string = "https://localhost:7020/api/UserDetails";



    constructor(private httpClient: HttpClient) {  }

    addPost(postD: userpostData){

        return this.httpClient.post(this.postUrl, postD);

    }

}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { postData} from "./PostdataObj";

@Injectable({
    providedIn: 'root'
})
export class DataService{
    postUrl: string = "https://jsonplaceholder.typicode.com/posts";


constructor(private httpclient : HttpClient) { }

addPost (postD: postData){
    return this.httpclient.post(this.postUrl,postD);
}
}

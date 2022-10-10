import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from './user-details.service';
import { Observable } from 'rxjs';


//CrossOrigin(origin="https://localhost:4200")
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private url: string = "https://localhost:7020/api/UserDetails";
  constructor(private http:HttpClient) { }
  getUserDetails(): Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(this.url);
  }
  }

  
  


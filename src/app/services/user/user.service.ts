import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { registerData } from 'src/app/register/registro.interface';
import { Observable } from 'rxjs';
import { logindata } from 'src/app/login/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //adress api rest
  url:string='http://localhost:8000'
  
  data:logindata={email:'',password:'',Id:''}

  constructor(private http:HttpClient) { }


  addclient(data:registerData):Observable<any>{
    return this.http.post(`${this.url}/registeruser`,data)
  }

    login(data:logindata):Observable<any>{
    
    return this.http.get(`${this.url}/login`,{
      params:{email:data.email,password:data.password},
    })


    
  
  }

 
  







}

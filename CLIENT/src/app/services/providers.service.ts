import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../market/form-proveedor/provider.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {


  url:string;

  Providers:Provider[]=[];

  constructor(UserService:UserService,private HttpClient:HttpClient) {

    this.url=UserService.url;
   }

   GetProvidersClient(id:string):Observable<any>{

    return this.HttpClient.get(`${this.url}/getprovidersbyclient/${id}`)
   }



}

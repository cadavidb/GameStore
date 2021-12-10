import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Observable } from 'rxjs/internal/Observable';
import { Market } from 'src/app/market/market/market.interface';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class MarketService {

  



  constructor(private http:HttpClient,private UserService:UserService) { }

  

  getMarkets():Observable<any>{
    return this.http.get(`${this.UserService.url}/markets`);
  }

  getMarketbyId(Id:string):Observable<any>{
    return this.http.get(`${this.UserService.url}/market/${Id}`);
  }

  getMarketbyClient(Id:string):Observable<any>{
    return this.http.get(`${this.UserService.url}/getmarketbyclient/${Id}`);
  }



    addMarket(market:Market):Observable<any>{
    
    return this.http.post(`${this.UserService.url}/createmarket`,market);
  }

  editMarket(id:string,dataMarket:Market):Observable<any>{

    console.log(id,dataMarket);

    return this.http.put(`${this.UserService.url}/editmarket/${id}`,dataMarket)

  }

  desactivateMarket(id:string,estado?:string):Observable<any>{
    console.log(estado);
    if (estado=="abierta") {
      estado="cerrada"
    }else{
      estado="abierta"
    }
    console.log(estado);

    return this.http.delete(`${this.UserService.url}/dropmarket/${id}/${estado}`)
  }



  



  

  


}

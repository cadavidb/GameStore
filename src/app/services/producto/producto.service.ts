import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/product/product/listar-productos/product.interface';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  url:string;
  title:string="";
  marketid:string="";
  codebill:string="";

  constructor(private http:HttpClient,private UserService:UserService)
  { 
    this.url=UserService.url;

  }


  DeleteProduct(idproduct:string,codebill:string):Observable<any>{

    return this.http.delete(`${this.url}/deleteproduct/${idproduct}/${codebill}`);
    
  }

  SaveProduct(producto:Producto):Observable<any>{

    return this.http.post(`${this.url}/createproduct`,producto);
    
  }

  GetProductsmarket(id:string):Observable<any>{

    return this.http.get(`${this.url}/getproductsbymarket/${id}`)

  }

  EditProduct(Idproduct:string,producto:Producto,codebill:string):Observable<any>{
   // https://compass-ssl.xbox.com/assets/79/03/790386b3-d885-4909-95aa-dcccea1614f7.jpg?n=Halo-MCC_Image-0_Boxshot-Halo3_321x484_02.jpg
    return this.http.put(`${this.url}/editproduct/${Idproduct}/${codebill}`,producto)

  } 

  GetProductById(Idproduct:string,Idmarket:string):Observable<any>{

    return this.http.get(`${this.url}/getproductbyid/${Idproduct}/${Idmarket}`)

  }

  



}

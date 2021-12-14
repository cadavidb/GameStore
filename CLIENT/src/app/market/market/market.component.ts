import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../services/market/market.service';
import { Market } from './market.interface';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { ProvidersService } from '../../services/providers.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  showFiller = false;


  


  
  constructor(private market:MarketService,private UserService:UserService,private toast:ToastrService,private router:Router,private ProviderService:ProvidersService) { 
    this.client=this.UserService.data.Id?this.UserService.data.Id:this.UserService.userlocalstorage.Id
   
  }
  markets:Market[]=[]
  client:string;

 


  ngOnInit(): void { 


    this.market.getMarkets().subscribe(({message,ok})=>{
      console.log(message);
   

      if (ok) {
        
        this.markets=message;
        
      }else{
        console.log(this.markets.length);
        this.toast.warning(message,"aviso")

      }
     

     
    })

    
  }

  exit(){

    localStorage.removeItem("usuario");
    this.router.navigate(['/login']);
    this.ProviderService.Providers=[];
  }

  addLike(ownstore?:string,idmarket?:string){
    
    if (ownstore!=this.client) {

      this.market.addLike(idmarket).subscribe(data=>{
        console.log(data);
      }
        
      )

    

    }else{
      this.toast.warning("no puedes calificar tu propia tienda","HEY!")
    }

  }
  addDislike(idmarket?:string,ownstore?:string){

    if (ownstore!=this.client) {

      this.market.addDisLike(idmarket).subscribe(data=>{
        console.log(data);
      }
        
      )

    }else{
      this.toast.error("no puedes calificar tu propia tienda","HEY!")
    }

  }



 








}

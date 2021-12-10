import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../services/market/market.service';
import { Market } from './market.interface';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  showFiller = false;


  


  
  constructor(private market:MarketService,private toast:ToastrService,private router:Router,private ProviderService:ProvidersService) { }
  markets:Market[]=[]

  ngOnInit(): void { 


    this.market.getMarkets().subscribe(data=>{
    const{message,ok}=data;

      if (ok) {
        for (let i = 0; i <message.length; i++) {
         
          this.markets.unshift(message[i])
        }
        
      }else{
        console.log(this.markets.length);
        this.toast.warning(message,"aviso")

      }
     


      console.log(this.markets);

  

     

     
    })

    
  }

  exit(){

    localStorage.removeItem("usuario");
    this.router.navigate(['/login']);
    this.ProviderService.Providers=[];
    

  }



 








}

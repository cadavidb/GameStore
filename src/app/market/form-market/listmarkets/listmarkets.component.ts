import { Component, OnInit } from '@angular/core';
import { Market } from '../../market/market.interface';
import { MarketService } from '../../../services/market/market.service';
import { UserService } from '../../../services/user/user.service';


@Component({
  templateUrl: './listmarkets.component.html',
  styleUrls: ['./listmarkets.component.css']
})
export class ListmarketsComponent implements OnInit {

  constructor(private MarketService:MarketService,private userService:UserService) { }


  listmymarkets:Market[]=[];
  displayedColumns: string[] = [ 'nombre', 'description', 'banner','estado','opciones'];
  estado:string='';
  id='';

  



  ngOnInit(): void {
    

    let data=JSON.parse(localStorage.getItem("usuario")!);
    this.id=!!this.userService.data.Id?this.userService.data.Id:data.Id

      this.MarketService.getMarketbyClient(this.id).subscribe(markets=>{
      this.listmymarkets=markets.markets
      console.log(this.listmymarkets);

    })

  }

  desactivate(Id:any,estado?:string){

    this.MarketService.desactivateMarket(Id,estado).subscribe(data=>{
      this.ngOnInit();
    })
    

    

  }

  


  }



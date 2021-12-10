import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketService } from 'src/app/services/market/market.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Market } from '../market/market.interface';
import { productsMarket } from '../market/productmarket.interface';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(
    private Market:MarketService,
    private route: ActivatedRoute,
    private products:ProductoService
    ) { }

  marketData:Market={
    products:[]
  }

  ngOnInit(): void {


    this.route.params.subscribe((updateParams)=>{

      const id=updateParams['Id'];
     

      this.Market.getMarketbyId(id).subscribe(data=>{

        console.log(data);

        
        const{namemarket,imgbanner}=data.market[0];
        this.marketData.namemarket=namemarket;
        this.marketData.imgbanner=imgbanner

        this.products.GetProductsmarket(id).subscribe(data=>{
          const {message:products}=data;

          products.map((game:productsMarket)=>{

            this.marketData.products.push(game)

          })
          

          
         

          
          
          
        })


        
      })


    })
   
  
  }

}

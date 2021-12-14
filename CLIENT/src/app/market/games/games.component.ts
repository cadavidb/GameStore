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


  Onavigate(game:any){
    console.log(game);
    var url = `https://web.whatsapp.com/send?phone=573163836265&text=hola 😄,%20deseo%20comprar%20este%20videojuego🎮👾%20${game.name}%20${game.imgproduct}%20que%20tiene%20un%20precio%20genial%20de%20💰💸${game.sale_price}`;
    var win = window.open(url, '_blank')!;
    win.opener = null;
    win.focus();
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

import {productsMarket} from './productmarket.interface';


export interface Market {


    Id?:string,
    likes?:number,
    dislikes?:number,
    owner_market?:string,
    description?:string,
    imgbanner?:string,
    namemarket?:string,
    estado?:string,
    products:productsMarket[]

}
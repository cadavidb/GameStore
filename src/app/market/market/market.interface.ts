import {productsMarket} from './productmarket.interface';


export interface Market {


    Id?:string,
    Id_own?:string
    description?:string,
    imgbanner?:string,
    namemarket?:string,
    estado?:string,
    products:productsMarket[]

}
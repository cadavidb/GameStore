export class Producto {
    Id?:string;
    codebill?:string
    id_store:string;
    id_provider:string;
    namegame:string;
    sale_price:string;
    purchase_price:string;
    description:string;
    image:string;
    amount:number;




    constructor(codebill:string,namegame:string, idstore:string ,idprovider:string, units:number,descripcion:string,imagen:string,salePrice:string,purchasePrice:string) {

        this.id_store=idstore;
        this.sale_price=salePrice;
        this.purchase_price=purchasePrice
        this.description=descripcion,
        this.image=imagen,
        this.amount=units,
        this.namegame=namegame;
        this.id_provider=idprovider;
        this.codebill=codebill;

        
    }
}
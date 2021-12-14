import { Component, OnInit ,OnDestroy} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../services/producto/producto.service';
import { Producto } from '../listar-productos/product.interface';
import { ProvidersService } from '../../../services/providers.service';
import { UserService } from '../../../services/user/user.service';
import { logindata } from '../../../login/login/login.interface';
import { Provider } from '../../../market/form-proveedor/provider.interface';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit , OnDestroy {

  
  titulo:string=this.ProductService.title;
  productForm:FormGroup;
  codebill:string=this.ProductService.codebill;
  id!:string;
  Providers:Provider[]=this.ProviderService.Providers;
  DataUser:logindata;
  ProductSuscription!:Subscription;
  ProviderSelected!:string;
  durationInSeconds = 2;
 


  

  constructor(
     private FormBuilder:FormBuilder,
     private Router:Router,
     private UserService:UserService,
     private ProductService:ProductoService,
     private ActivatedRoute:ActivatedRoute,
     private ProviderService:ProvidersService,
     private Toastr:ToastrService,
     ) {

      this.DataUser=JSON.parse(localStorage.getItem('usuario')!);
      this.ActivatedRoute.params.subscribe((updateParams)=>{
        this.id=updateParams['Id'];
      })

    this.productForm=this.FormBuilder.group({
      namegame:['',Validators.required],
      description:['',Validators.compose([Validators.required,Validators.minLength(10)])],
      imgame:['',Validators.compose([Validators.required,Validators.minLength(10)])],
      preciocompra:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.min(1000) ,Validators.max(100000000)])],
      precioventa:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.min(1000) ,Validators.max(100000000)])],
      cantidad:['',Validators.compose([Validators.required,Validators.min(1),Validators.max(1000)])],
    })


    
   


   }

   
   AddOrUpdate(){

    
  
        const ProductDone:Producto={
          namegame:this.productForm.get('namegame')?.value,
          description:this.productForm.get('description')?.value,
          image:this.productForm.get('imgame')?.value,
          purchase_price:this.productForm.get('preciocompra')?.value,
          sale_price:this.productForm.get('precioventa')?.value,
          amount:this.productForm.get('cantidad')?.value,
          id_provider:this.ProviderSelected,
          id_store:this.id,
        }

        if (this.ProductService.title=="Editar Juego"){


          this.ProductService.EditProduct(this.id,ProductDone,this.codebill)
          .subscribe(data=>{
            this.Toastr.show("exito","Juego editado")
            this.Router.navigate(['listProducts',this.ProductService.marketid])
          })

        }else{
          this.ProductService.SaveProduct(ProductDone)
          .subscribe(data=>{
            this.Toastr.success("exito","juego creado")
            this.Router.navigate(['listProducts',this.id])
          })

        }
  
  
        
  
  
      



      
    
   
    

    

    

   }

   ngOnDestroy(): void {
       this.ProductSuscription.unsubscribe()
   }

  ngOnInit(): void {

    
    if (this.ProductService.title=="Editar Juego") {
     
       
        this.ProductService.GetProductById(this.id,this.ProductService.marketid)
        .subscribe(({message:product})=>{

          

          this.ProductService.codebill=product[0]['codebill'];

          this.productForm.setValue(
            {
              namegame:product[0]['namegame'],
              description:product[0]['description'],
              imgame:product[0]['imgame'],
              preciocompra:product[0]['purchase_price'],
              precioventa:product[0]['sale_price'],
              cantidad:product[0]['cantidad']

            }
          )
          
        })

      
    }

   

  
    if (!this.UserService.data.Id) {

      this.UserService.data.Id=this.DataUser.Id;
      
    }
    
     this.ProductSuscription= this.ProviderService.GetProvidersClient(this.UserService.data.Id)
      .subscribe(({message})=>{
    
        this.ProviderService.Providers=message;


      })
  
    

  }

}

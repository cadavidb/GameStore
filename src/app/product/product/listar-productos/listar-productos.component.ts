
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import {Producto} from './product.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent   implements OnInit {

 
  
 
  id:string=this.producto_service.marketid;
  list_products:Producto[]=[];
  displayedColumns: string[] = ['nombre', 'imagen', 'descripcion','stock','preciocompra', 'precioventa','opciones'];
  dataSource!: MatTableDataSource<Producto>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  
  constructor(
    private producto_service:ProductoService,
    private toastr: ToastrService,
    private ActivateRouter:ActivatedRoute,
  
    ) { 

    this.ActivateRouter.params.subscribe((updateParams)=>{
      this.producto_service.marketid=updateParams['Id'];
    })

    
  }


 
 refresh(){

  this.producto_service.GetProductsmarket(this.producto_service.marketid)
      .subscribe(({message:products})=>{
       
        this.list_products=products;
        this.dataSource= new MatTableDataSource<Producto>(this.list_products)
        this.dataSource.paginator=this.paginator;
        
      
      })

 }


  ngOnInit(): void {

    this.refresh()

    
  }

  Change(title:string){
    this.producto_service.title=title;
      
  }

  applyFilter(event:Event) {

    const filterValue = (event.target as HTMLInputElement).value;
   
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  DeleteProduct(product:Producto){
  
        
        this.producto_service.DeleteProduct(product.Id!,product.codebill!)
        .subscribe(data=>{
          this.refresh();
          
        })
    



  }
  


 


      
        
    

    

    
     
    
     
  }

  // delete(_id:any){
  //   this.producto_service.DeleteProduct(_id).subscribe(data=>{

  //     this.toastr.success('Producto', 'eliminado con exito',{
  //       timeOut:1500,
  //       positionClass:'toast-top-center',
        
  //     });




    




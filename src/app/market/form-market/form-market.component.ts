import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Market } from '../market/market.interface';
import { MarketService } from 'src/app/services/market/market.service';
import { UserService } from '../../services/user/user.service';



@Component({
  templateUrl: './form-market.component.html',
  styleUrls: ['./form-market.component.css']
})
export class FormMarketComponent implements OnInit {


  marketForm:FormGroup;
  id:string;
  titulo:string='Crear market'

  constructor(private fb :FormBuilder,private router:Router,
    private toastr: ToastrService,
    private Marketservice:MarketService,
    private userService:UserService,
    private aRouter:ActivatedRoute) { 
    this.marketForm=this.fb.group({
      namemarket:['',Validators.required],
      description:['',Validators.required],
      imgbanner:['',Validators.required],
      
    })
    this.id=this.aRouter.snapshot.paramMap.get('Id')!;
  }


  addmarket(){


    const dataMarket:Market={
      namemarket:this.marketForm.get('namemarket')?.value,
      description:this.marketForm.get('description')?.value,
      imgbanner:this.marketForm.get('imgbanner')?.value,
      Id_own:this.userService.data.Id,
      products:[]
     
      
    }


    if (this.id!==null) {
      
      

        this.Marketservice.editMarket(this.id,dataMarket).subscribe(data=>{
        this.toastr.info('market editada!','exito',{
          timeOut:1500,
          positionClass:'toast-top-center',
          
        })
        this.router.navigate(['marketsclient']);
      })

    }else{

      

      this.Marketservice.addMarket(dataMarket).subscribe(data=>{
        this.toastr.success('market registrada!','Exito',{
          timeOut:1500,
          positionClass:'toast-top-center',
          
        });
         this.router.navigate(['/markets']);
  
      },error=>{
        console.log(error);
        this.marketForm.reset();
      }
      );
  
    


    }






    
  }


  ngOnInit(): void {

    this.esEditar();

  }



  esEditar(){

    if (this.id!==null) {
         this.titulo='Editar market';
         this.Marketservice.getMarketbyId(this.id).subscribe(data=>{
          

     const { namemarket,description,imgbanner}=data.market[0];
     
          this.marketForm.setValue({

            namemarket:namemarket,
            description:description,
            imgbanner:imgbanner,
            
          })
      })
      
    }
      
  }

}

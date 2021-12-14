import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

import { registerData } from '../registro.interface';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',]
})
export class RegisterComponent  {

  userData:registerData={
    name:'',
    email:'',
    password:''
  }


  constructor(private serviceUser:UserService,private toast:ToastrService,private router:Router) { }


  adduser(){


    if (this.userData.name.trim().length>0 && this.userData.email.length>10 && this.userData.password.length>=9) {
      this.serviceUser.addclient(this.userData).subscribe(data=>{
        
        this.toast.success("usuario registrado","exito")
        this.router.navigate(['/login']);
      })
    }else{

      this.toast.error("intentalo de nuevo","Error")
    }

    
  

  
    
  }

 

}

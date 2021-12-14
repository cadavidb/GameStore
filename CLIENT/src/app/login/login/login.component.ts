import { Component, OnInit } from '@angular/core';
import { logindata } from './login.interface';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  


  
  ngOnInit(): void {

    const c=localStorage.getItem("usuario");

      if (c) {
       this.router.navigate(['markets'])

      }

   



      
  }
  


  constructor(private userService:UserService,private toast:ToastrService,private router:Router) { }

  data:logindata=this.userService.data;


  login(){
   
      this.userService.login(this.data).subscribe((data)=>{

        const {ok,message,data:userInfo}=data;
        console.log(userInfo)

      
        if (ok){
          this.toast.success(`${message}`,"Bien")

          this.userService.data=userInfo[0];
          localStorage.setItem('usuario', JSON.stringify(userInfo[0]));
          

          
          
          this.router.navigate(['markets'])
  
        }
  

      },err=>{
        
        console.log(err);

         this.toast.error(`${err.error.message}`,"error")
      })



      
    
   
    


  }

  
}

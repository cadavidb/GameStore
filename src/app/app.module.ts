import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MarketModule } from './market/market.module';
import { RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ProductModule } from './product/product.module';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MarketModule,
    RouterModule,
    RegisterModule,
    FormsModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    ProductModule,
    MatSortModule
   
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  




}

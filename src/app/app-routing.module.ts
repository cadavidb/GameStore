import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { MarketComponent } from './market/market/market.component';

import { GamesComponent } from './market/games/games.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormMarketComponent } from './market/form-market/form-market.component';
import { ListmarketsComponent } from './market/form-market/listmarkets/listmarkets.component';
import { ListarProductosComponent } from './product/product/listar-productos/listar-productos.component';
import { CreateProductComponent } from './product/product/create-product/create-product.component';

const routes: Routes = [
  {path: '', component:WelcomeComponent},
  {path:  'welcome',component:WelcomeComponent,pathMatch:'full'},
  { path: 'register', component: RegisterComponent,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: 'markets', component: MarketComponent,  pathMatch: 'full'},
  { path: 'createmarket', component: FormMarketComponent,  pathMatch: 'full'},
  { path: 'market/:Id', component: GamesComponent,  pathMatch: 'full'},
  { path: 'editmarket/:Id', component: FormMarketComponent,  pathMatch: 'full'},
  {path:'listProducts/:Id',component:ListarProductosComponent,pathMatch:'full'},
  {path:'addproduct/:Id',component:CreateProductComponent,pathMatch:'full'},
  {path:'editproduct/:Id',component:CreateProductComponent,pathMatch:'full'},

  
  { path: 'marketsclient', component: ListmarketsComponent,  pathMatch: 'full'},
  
  {path:'**', redirectTo:'login'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

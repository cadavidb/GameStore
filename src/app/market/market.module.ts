import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market/market.component';
import { RouterModule } from '@angular/router';
import { MarketService } from '../services/market/market.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { FormMarketComponent } from './form-market/form-market.component';
import { FormProveedorComponent } from './form-proveedor/form-proveedor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListmarketsComponent } from './form-market/listmarkets/listmarkets.component';
import { GamesComponent } from './games/games.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    MarketComponent,
    FormMarketComponent,
    FormProveedorComponent,
    ListmarketsComponent,
    GamesComponent,
    
  ],
  exports:[
    MarketComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
    
    
    
  ],
  providers:[
    MarketService,
    ProductoService
    
  ]
})
export class MarketModule { }

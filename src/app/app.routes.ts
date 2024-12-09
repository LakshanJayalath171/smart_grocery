import { Routes } from '@angular/router';
import { LoginComponent } from '../components/admin/login/login.component';
import { LayoutComponent } from '../components/admin/layout/layout.component';
import { ProductsComponent } from '../components/admin/products/products.component';

export const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'product',
        component:ProductsComponent
      }
    ]
  }
];

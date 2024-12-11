import { Component } from '@angular/core';
import { ProductService } from '../../../app/service/product service/product.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  products$:Observable<any>
  constructor(private productService:ProductService){
    this.products$ = this.productService.getAllCategory().pipe(
      map((item:any)=>{
        return item.data;
      })
    )
  }

  

  getAllCategories(){}
    

}

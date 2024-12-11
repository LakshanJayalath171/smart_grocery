import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../app/service/product service/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{


  constructor(private productService:ProductService){}

  categoryList:any []=[];
  productList:any []=[];

  ngOnInit(): void {
    this.getAllCategory()
    this.getAllPoroducts()
  }

  getAllCategory(){
    this.productService.getAllCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }

  getAllPoroducts(){
    this.productService.getAllProduct().subscribe((res:any)=>{
      this.productList=res.data;
    })
  }

  isSidePanelVisible:boolean=true;

  openSidepannel(){
    this.isSidePanelVisible=true
  }
  closeSidePannel(){
    this.isSidePanelVisible=false
  }

  productObj:any={
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": "",
    "productImageUrl": "",
    
  }

  onsave(){
    this.productService.addProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert('Product Created')
        this.getAllPoroducts()
      }
      else{
        alert(res.message)
      }
    })
  }

  onDelete(item:any){
    const isDelete = confirm("Are You Want Delete This Product...");
    {
      if(isDelete){
        this.productService.deleteProduct(item.productId).subscribe((res:any)=>{
          debugger;
          if(res.result){
            alert('Product Deleted')
            this.getAllPoroducts()
          }
          else{
            alert(res.message)
          }
        })
      }
    }
  }

  onEdit(item:any){
    this.productObj=item;
    this.openSidepannel()
  }

  onUpdate(){
    this.productService.updateProduct(this.productList).subscribe((res:any)=>{
      if(res.result){
        alert('Product Upadated');
        this.getAllPoroducts()
      }
      else{
        alert(res.message)
      }
    })
  }
  


}

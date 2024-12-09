import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  isSidePanelVisible:boolean=true;

  openSidepannel(){
    this.isSidePanelVisible=true
  }
  closeSidePannel(){
    this.isSidePanelVisible=false
  }


}

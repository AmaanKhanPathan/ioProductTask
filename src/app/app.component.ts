import { Component } from '@angular/core';
import { Icatg, iProduct } from './shared/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioProductTask';
  productsArray : Array<iProduct> = [
    {
      pname : "Smasung",
      pDesc : "qwerty",
      pCatg : "Catlog",
    }
  ]

  addProductDetails(pname: HTMLInputElement, pdesc: HTMLInputElement, catg : Icatg){
    console.log(pname, pdesc);
    let obj : iProduct = {
      pname : pname.value,
      pDesc : pdesc.value,
      pCatg : catg
    }
    this.productsArray.push(obj)

    pname.value = ""
    pdesc.value = ""
    
  
  }
  // addProducts(pname: HTMLInputElement, pdesc: HTMLInputElement){
  //   console.log(pname, pdesc);
  //   let obj : iProduct = {
  //     pname : pname.value,
  //     pDesc : pdesc.value,
  //     pCatg : "Product"
  //   }
  //   this.productsArray.push(obj)

  //   pname.value = ""
  //   pdesc.value = ""
    
  
  // }
  // addCatlogs(pname: HTMLInputElement, pdesc: HTMLInputElement){
  //   console.log(pname, pdesc);
  //   let obj : iProduct = {
  //     pname : pname.value,
  //     pDesc : pdesc.value,
  //     pCatg : "Catlog"
  //   }
  //   this.productsArray.push(obj)

  //   pname.value = ""
  //   pdesc.value = ""
    
  
  // }
  
}


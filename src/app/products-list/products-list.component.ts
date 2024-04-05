import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { FilterProductsComponent } from '../filter-products/filter-products.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, FilterProductsComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription = new Subscription();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.subscription = this.productService.getProducts().subscribe((response) => {
      this.products = response;
      this.filteredProducts = response;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  receiveFilter(filterTerm: string) {
    this.filteredProducts = this.products.filter(product => product.category === filterTerm);
  }

}

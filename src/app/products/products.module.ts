import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';


@NgModule({
  declarations: [ProductPageComponent],
  imports: [CommonModule, ReactiveFormsModule, ProductsRoutingModule],
})
export class ProductsModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Product_ } from './product.model';

@Injectable()
export class ProductsService {
  products: Product_[] = [];

  insertProduct(title: string, desc: string, price: number): any {
    const prodId = new Date().toString();
    const newProduct = new Product_(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProduct() {
    return this.products;
  }

  getProductById(productId: string) {
    const product = this.products.find(prod => {
      productId === prod.id;
    });
    if (!product) {
      throw new NotFoundException('cant find no products.');
    } else {
      return product;
    }
  }
}

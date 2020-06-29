import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedID = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );

    return { id: generatedID };
  }

  /*{
   *	"title":"a test",
   *	"description": "a testicle",
   *	"price":"infinity"
   *
   *}
   */

  @Get()
  getProduct(): any {
    return this.productsService.getProduct();
  }

  /*
   * [
   *   {
   *       "id": "Mon Jun 29 2020 00:54:19 GMT+0800 (Malaysia Time)",
   *       "title": "a test",
   *       "desc": "a testicle",
   *       "price": "infinity"
   *   }
   *]
   */

  @Get()
  getProductById(@Param('id') prodId: string): any {
    return this.productsService.getProductById(prodId);
  }
}

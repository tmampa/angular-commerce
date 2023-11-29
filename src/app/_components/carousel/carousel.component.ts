import {Component, OnInit} from '@angular/core';
import { Product } from "@app/_models";
import { ProductService } from "@app/_services";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {
  imgCollection: Array<object> = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.imgCollection = products.map((product, index) => ({
        image: product.image,
        thumbImage: product.image,
        alt: `Image ${index + 1}`,
      }));
    });
  }


}

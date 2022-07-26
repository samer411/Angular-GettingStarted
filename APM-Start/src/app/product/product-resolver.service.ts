import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { IProduct, ProductResolved } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<ProductResolved> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any | Observable<any> | Promise<any> {
    const id = Number(route.paramMap.get('id'));
    if (isNaN(+id)) {
      console.error('product id is not valid');
      return of({ product: null, error: onmessage });
    }
    return this.productService.getProduct(id).pipe(
      map((product) => ({ product: product })),
      catchError((error) => {
        const message = `Retrival Error : ${error}`;
        console.error(error);
        return of({ product: null, error: message });
      })
    );
  }
}

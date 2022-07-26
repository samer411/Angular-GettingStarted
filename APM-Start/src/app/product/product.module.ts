import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';
import { MessageComponent } from './message/message.component';
import { MessageModule } from './message/message.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    MessageModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
      { path: 'message', component: MessageComponent, outlet: 'popup' },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { resolvedData: ProductResolver },
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: { resolvedData: ProductResolver },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: ProductEditInfoComponent },
          { path: 'tags', component: ProductEditTagsComponent },
        ],
      },
    ]),
    ReactiveFormsModule,
  ],
  declarations: [
    ProductEditComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditTagsComponent,
    ProductEditInfoComponent,
  ],
  exports: [RouterModule],
})
export class ProductModule {}

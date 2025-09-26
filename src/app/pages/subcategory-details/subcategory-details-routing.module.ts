import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoryDetailsPage } from './subcategory-details.page';

const routes: Routes = [
  {
    path: '',
    component: SubcategoryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoryDetailsPageRoutingModule {}

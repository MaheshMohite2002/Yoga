import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcategoryDetailsPageRoutingModule } from './subcategory-details-routing.module';

import { SubcategoryDetailsPage } from './subcategory-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcategoryDetailsPageRoutingModule
  ],
  declarations: [SubcategoryDetailsPage]
})
export class SubcategoryDetailsPageModule {}

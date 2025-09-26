import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcategoryDetailsPage } from './subcategory-details.page';

describe('SubcategoryDetailsPage', () => {
  let component: SubcategoryDetailsPage;
  let fixture: ComponentFixture<SubcategoryDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

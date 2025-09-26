import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  standalone: false,
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
  categoryKey: string = '';
  categoryTitle: string = '';
  subcategories: string[] = [];

  readonly SUBCATEGORY_DATA: any = {
    Pranayam: [
      'Anulom Vilom',
      'Bhramari',
      'Kapalabhati',
      'Ujjayi',
      'Sheetali',
      'Sheetkari',
      'Bhastrika',
      'Nadi Shodhana',
    ],
    meditation: [
      'Mindfulness Meditation',
      'Guided Meditation',
      'Chanting Meditation',
      'Trataka',
      'Breath Awareness',
      'Loving-Kindness',
      'Mantra Meditation',
      'Body Scan',
    ],
    suryanamaskar: [
      'Hatha Suryanamaskar',
      'Suryanamaskar A',
      'Suryanamaskar B',
      'Power Suryanamaskar',
      'Chair Suryanamaskar',
      'Mantra-based Suryanamaskar',
    ],
    strotam: [
      'Hanuman Chalisa',
      'Maha Mrityunjaya Mantra',
      'Vishnu Sahasranama',
      'Durga Stotram',
      'Ganapati Atharvashirsha',
      'Shiva Tandava Stotram',
      'Gayatri Mantra',
      'Shanti Mantras',
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryKey = (params.get('category') || '').toLowerCase();
      console.log("Sub Category", this.categoryKey)
      this.categoryTitle = this.capitalize(this.categoryKey);
      this.subcategories = this.SUBCATEGORY_DATA[this.capitalize(this.categoryKey)] || [];
      console.log("Sub cat", this.subcategories)
    });
  }

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

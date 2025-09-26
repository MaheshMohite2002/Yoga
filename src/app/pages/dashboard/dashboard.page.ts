import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  yogaCategories = [
    {
      name: 'Pranayam',
      image: 'assets/pranayam.png',
      route: 'Pranayam',
    },
    {
      name: 'Meditation',
      image: 'assets/meditation.png',
      route: 'meditation',
    },
    {
      name: 'Suryanamaskar',
      image: 'assets/suryanamaskar.png',
      route: 'suryanamaskar',
    },
    {
      name: 'Strotam',
      image: 'assets/strotam.png',
      route: 'strotam',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToSubCategory(category: string) {
    this.router.navigate(['/subcategory', category.toLowerCase()]);
  }
}

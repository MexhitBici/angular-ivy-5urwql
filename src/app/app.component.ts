import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tourData: any;
  trolleyData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Fetch tour data and assign it to tourData
    this.dataService.getTourData().subscribe((tourData) => {
      this.tourData = tourData;
    });

    // Fetch trolley data and assign it to trolleyData
    this.dataService.getTrolleyData().subscribe((trolleyData) => {
      this.trolleyData = trolleyData;
    });
  }

  // Check if a trolley with a given trolleyId exists in trolleyData
  trolleyCheck(trolleyId: number): boolean {
    if (this.trolleyData) {
      // Use Array.some() to check if any trolley has the specified trolleyId
      return this.trolleyData.some(
        (trolley) => trolley.trolleyId === trolleyId
      );
    }
    return false; // Return false if trolleyData is undefined
  }
}

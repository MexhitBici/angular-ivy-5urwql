import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data-retreival.service';

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
    this.dataService.getTourData().subscribe((data) => {
      this.tourData = data;
    });

    this.dataService.getTrolleyData().subscribe((data) => {
      this.trolleyData = data;
    });
  }

  trolleyCheck(tId: number): boolean {
    if (this.trolleyData) {
      for (let i = 0; i < this.trolleyData.length; i++) {
        const trolley = this.trolleyData[i];
        if (trolley.trolleyId === tId) {
          return true;
        }
      }
      return false;
    }
  }
}

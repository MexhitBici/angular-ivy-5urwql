import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent {
  @Input() tourData: any;
  @Input() trolleyData: any;

  constructor() {}

  toggleAccordion(index: number) {
    var chev = 'chevron' + index;
    var ele = document.getElementById(chev);
    if (!ele.classList.contains('open')) {
      ele.setAttribute('src', './assets/chevron-up.svg');
      ele.classList.add('open');
    } else {
      ele.setAttribute('src', './assets/chevron-down.svg');
      ele.classList.remove('open');
    }

    // Close other accordions except the clicked one
    this.trolleyData.forEach((trolley, i) => {
      if (i !== index) {
        trolley.isOpen = false;
        var chevno = 'chevron' + i;
        var elem = document.getElementById(chevno);
        elem.classList.remove('open');
        elem.setAttribute('src', './assets/chevron-down.svg');
      }
    });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './mytour.component.html',
  styleUrls: ['./mytour.component.css'],
})
export class TourComponent {
  @Input() tourData: any;
  @Input() trolleyData: any;

  constructor() {}

  // Toggle the accordion based on the index
  toggleAccordion(index: number) {
    // Generate the ID for the chevron element
    const chevronId = `chevron${index}`;

    // Get the chevron element by ID
    const chevronElement = document.getElementById(chevronId);

    // Toggle the open class and update the chevron icon
    if (!chevronElement.classList.contains('open')) {
      chevronElement.setAttribute('src', './assets/chevron-up.svg');
      chevronElement.classList.add('open');
    } else {
      chevronElement.setAttribute('src', './assets/chevron-down.svg');
      chevronElement.classList.remove('open');
    }

    // Close other accordions except the clicked one
    this.trolleyData.forEach((trolley, i) => {
      if (i !== index) {
        trolley.isOpen = false;

        // Generate the ID for the other chevron element
        const otherChevronId = `chevron${i}`;

        // Get the other chevron element by ID
        const otherChevronElement = document.getElementById(otherChevronId);

        // Remove the open class and update the chevron icon
        otherChevronElement.classList.remove('open');
        otherChevronElement.setAttribute('src', './assets/chevron-down.svg');
      }
    });
  }
}

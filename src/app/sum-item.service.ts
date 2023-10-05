import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SumItemService {
  // Calculate the sum of ntraySize for items with a valid trolley property
  addSumItem(itemName: string, list: any): number {
    // Initialize the sum to zero
    let sum = 0;

    // Loop through each item in the list
    for (const item of list) {
      // Check if the item has a valid trolley property (not null or undefined)
      if (item.trolley !== null && item.trolley !== undefined) {
        // Add the ntraySize of the item to the sum
        sum += item.ntraySize;
      }
    }

    // Return the calculated sum
    return sum;
  }
}

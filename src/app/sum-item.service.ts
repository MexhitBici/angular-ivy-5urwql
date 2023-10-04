import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SumItemService {
  addSumItem(itemName: string, list: any): number {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].trolley !== null && list[i].trolley !== undefined) {
        sum += list[i].ntraySize;
      }
    }
    return sum;
  }
}

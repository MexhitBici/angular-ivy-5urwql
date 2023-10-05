import { Component, OnInit, Input } from '@angular/core';
import { SumItemService } from '../add-item.service';

@Component({
  selector: 'app-trolley',
  templateUrl: './mytrolley.component.html',
  styleUrls: ['./mytrolley.component.css', '../../styles.css'],
})
export class TrolleyComponent implements OnInit {
  @Input() trolley: any;
  sum = 0;

  // Inject the SumItemService into the component
  constructor(private sumItemService: SumItemService) {}

  ngOnInit() {
    // Extract trolleyName and prodLabels from the input trolley
    const itemName = this.trolley.trolleyName;
    const list = this.trolley.prodLabels;

    // Calculate the sum of ntraySize using the SumItemService
    this.sum = this.sumItemService.addSumItem(itemName, list);
  }
}

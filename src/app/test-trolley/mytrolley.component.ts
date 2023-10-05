import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SumItemService } from '../add-item.service';

@Component({
  selector: 'app-trolley',
  templateUrl: './mytrolley.component.html',
  styleUrls: ['./mytrolley.component.css', '../../styles.css'],
})
export class TrolleyComponent implements OnInit {
  @Input() trolley: any;
  sum = 0;
  constructor(private sumItemService: SumItemService) {}

  ngOnInit() {
    let itemName = this.trolley.trolleyName;
    let list = this.trolley.prodLabels;
    this.sum = this.sumItemService.addSumItem(itemName, list);
  }
}

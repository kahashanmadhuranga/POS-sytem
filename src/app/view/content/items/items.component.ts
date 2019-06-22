import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../../service/item.service';
import {Item} from '../../../dto/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  allItems: Item[];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getAllItems();
  }

  saveItem() {
    this.itemService.saveItem(new Item(0, '4GB DDR5 RAM', '4500', 6))
      .subscribe((isSaved: boolean) => {
        alert(isSaved);
      });
  }

  updateItem() {
    this.itemService.updateItem(new Item(2, 'abc', '400', 3))
      .subscribe((isUpdated: boolean) => {
        alert((isUpdated));
      });
  }

  getAllItems() {
    this.itemService.getAllItems()
      .subscribe((allItem: Item[]) => {
        this.allItems = allItem;
      });
  }

  deleteItem() {
    this.itemService.deleteItem(3)
      .subscribe((isDelete: boolean) => {
        alert(isDelete);
      });
  }
}

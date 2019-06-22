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
  id = 0;
  description = '';
  price = 0;
  qty = 0;
  selectExistsItem = false;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getAllItems();
  }

  saveItem(code, description, price, eQty) {
    const id: number = code;
    const desc: string = description;
    const pric: string = price;
    const qty: number = eQty;
    if (!this.selectExistsItem) {
      this.itemService.saveItem(new Item(0, desc, pric, qty))
        .subscribe((isSaved: boolean) => {
          if (isSaved) {
            alert('save success');
            this.getAllItems();
            this.reset();
          } else {
            alert('save failed');
          }
        });
    } else {
      this.updateItem(id, desc, pric, qty);
    }
  }

  updateItem(code, description, price, qty) {
    this.itemService.updateItem(new Item(code, description, price, qty))
      .subscribe((isUpdated: boolean) => {
        if (isUpdated) {
          alert('update success');
          this.getAllItems();
          this.reset();
        } else {
          alert('update failed');
        }
      });
  }

  getAllItems() {
    this.itemService.getAllItems()
      .subscribe((allItem: Item[]) => {
        this.allItems = allItem;
      });
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id)
      .subscribe((isDelete: boolean) => {
        if (isDelete) {
          alert('delete success');
          this.getAllItems();
        } else {
          alert('delete failed');
        }
      });
  }

  reset() {
    this.selectExistsItem = false;
    this.id = 0;
    this.description = '';
    this.price = 0;
    this.qty = 0;
  }
}

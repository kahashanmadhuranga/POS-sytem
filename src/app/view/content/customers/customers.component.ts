import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {Customer} from '../../../dto/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomers()
      .subscribe((customers: Customer[]) => {
        this.customers = customers;
      });
  }

  saveCustomer() {
    this.customerService.saveCustomer(new Customer(0, 'Randika', 'Ragama', '0778079623'))
      .subscribe((isSaved: boolean) => {
        alert(isSaved);
      });
  }

  updateCustomer() {
    this.customerService.updateCustomer(new Customer(0, 'Randika', 'Ragama', '0778079623'))
      .subscribe((isSaved: boolean) => {
        alert(isSaved);
      });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(3)
      .subscribe((isDeleted: boolean) => {
        alert(isDeleted);
      });
  }
}

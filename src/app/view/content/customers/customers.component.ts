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
  selectedCustomer = Customer;
  selectExistsCustomer = false;
  id = 0;
  name = '';
  address = '';
  telephone = '';

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

  saveCustomer(id, name, address, telephone) {
    if (!this.selectExistsCustomer) {
      console.log('save');
      this.customerService.saveCustomer(new Customer(0, name, address, telephone))
        .subscribe((isSaved: boolean) => {
          if (isSaved) {
            alert('save success');
            this.getAllCustomers();
            this.selectExistsCustomer = false;
            this.reset();
          } else {
            alert('save failed');
          }
        });
    } else {
      this.updateCustomer(id, name, address, telephone);
    }
  }

  updateCustomer(id, name, address, telephone) {
    console.log('update');
    this.customerService.updateCustomer(new Customer(id, name, address, telephone))
      .subscribe((isSaved: boolean) => {
        if (isSaved) {
          alert('update success');
          this.getAllCustomers();
          this.selectExistsCustomer = false;
          this.reset();
        } else {
          alert('update failed');
        }
      });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe((isDeleted: boolean) => {
        if (isDeleted) {
          alert('delete customer success');
          this.selectExistsCustomer = false;
          this.getAllCustomers();
        } else {
          alert('failed to delete');
        }
      });
  }

  selectCustomer(customer: Customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.address = customer.address;
    this.telephone = customer.telephone;
    this.selectExistsCustomer = true;
  }

  reset() {
    this.selectExistsCustomer = false;
    this.id = 0;
    this.name = '';
    this.address = '';
    this.telephone = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { addCustomer } from 'src/app/customer/store/action/customer.actions';
import { CustomerState } from 'src/app/customer/store/reducer/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<CustomerState>) { }

  ngOnInit(): void {
  }

  addCustomer(customerName: string): void {
        const customer = new Customer();
        customer.name = customerName;
        this.store.dispatch(addCustomer(customer));
      }
}

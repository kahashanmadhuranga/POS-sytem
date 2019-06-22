import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../dto/customer';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.api + 'customer');
  }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(environment.api + 'customer', customer);
  }

  updateCustomer(customer: Customer): Observable<boolean> {
    return this.http.put<boolean>(environment.api + 'customer', customer);
  }

  deleteCustomer(id: number): Observable<boolean> {
    // const httpParm = new HttpParams();
    // httpParm.append('id', id.toString());
    return this.http.post<boolean>(environment.api + 'deleteCustomer', {});
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Employee} from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  constructor(private httpClient:HttpClient) {  
  }

  getEmployees():Observable<Employee[]>
  {
        return this.httpClient.get<Employee[]>("http://localhost:3000/employee");

  }
}

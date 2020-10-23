import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from './employee.model';
import{EmployeeApiService} from './employeeapi.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codevianDemo';
  id:number;
  name:String;
  phone:number;
  city:String;
  address_line1:String;
  address_line2:String;
  postal_code:number;
  constructor(private employeeApiService: EmployeeApiService){}



  
  
  showdata(){
    this.employeeApiService.getEmployees().subscribe((data)=>{
      if(data.length>0){
        console.log(data);
      }
    });          
  }
}

import { inject, Service } from '@angular/core';
import { GenericService } from './generic-service';
import { IApiResponse } from '../models/interface/BankUser.model';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/class/Employee.model';

@Service()
export class EmployeeService {
    genericSrv=inject(GenericService)

    getChildDepartment():Observable<IApiResponse>{
        return this.genericSrv.get<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllChildDepartment")
    }
    createEmployee(empObj:EmployeeModel){
        return this.genericSrv.post<EmployeeModel,EmployeeModel>("https://projectapi.gerasim.in/api/EmployeeManagement/CreateEmployee",empObj)
    }
    getAllEmployee(){
        return this.genericSrv.get<EmployeeModel[]>("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees")
    }
}

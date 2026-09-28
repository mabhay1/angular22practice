import { inject, Service } from '@angular/core';
import { GenericService } from './generic-service';
import { BankUser, IApiResponse, IBankUserList } from '../models/interface/BankUser.model';
import { Observable } from 'rxjs';

@Service()
export class BankUserService {
    genericSrv=inject(GenericService)

    getAllBankUsers():Observable<IApiResponse>{
        return this.genericSrv.get<IApiResponse>("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers")
    }
    registerBankUser(userObj:BankUser):Observable<IApiResponse>{
        return this.genericSrv.post<IApiResponse,BankUser>("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",userObj)
    }
    updateUser(userObj:IBankUserList):Observable<IApiResponse>{
        return this.genericSrv.put<IApiResponse,IBankUserList>("https://projectapi.gerasim.in/api/BankLoan/UpdateUser",userObj)
    }
}

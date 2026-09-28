import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class GenericService {
    http=inject(HttpClient)
    get<T>(url:string):Observable<T>{
        return this.http.get<T>(url)
    }
    post<TResponse,TBody>(url:string,obj:TBody):Observable<TResponse>{
        return this.http.post<TResponse>(url,obj)
    }
    put<TResponse,TBody>(url:string,obj:TBody):Observable<TResponse>{
        return this.http.put<TResponse>(url,obj)
    }
    delete(url:string,id:number){
        return this.http.delete(url+id)
    }
}

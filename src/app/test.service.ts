import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  apiUrl='https://localhost:44358/api/University/GetAllFaculty'
  apiUrlpd = 'https://localhost:44358/api/University/PostData'
  apiUrlP = 'https://localhost:44358/api/University/Put'
  apiUrlD = 'https://localhost:44358/api/University/Delete'
  constructor(private http:HttpClient) { }

  getTableData(): Observable<any>{
    return this.http.get(this.apiUrl)
  }
  addUser(data: any) {
    return this.http.post(this.apiUrlpd,data)
  }
  editUser(data: any) {
    return this.http.put(this.apiUrlP,data)
  }
  delete(data: any) {
    return this.http.delete(this.apiUrlD+"?id="+data)
  }
}
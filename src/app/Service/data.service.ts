import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "https://localhost:7293/api/";
  }
  GetData(_url: string) {
    _url = this.apiUrl + _url;
    console.log(_url);
    return this.http.get(_url, { withCredentials: true }).pipe(catchError(this.handleError));
}
GetDataById(_url: string, _id: string) {
    _url = this.apiUrl + _url + "/" + _id;
    return this.http.get(_url, { withCredentials: true }).pipe(catchError(this.handleError));
}
PostData(_url: string, _postdata: any) {
    _url = this.apiUrl + _url;
    return this.http.post(_url, _postdata, { withCredentials: true }).pipe(catchError(this.handleError));
}
PutData(_url: string,_params:any, _putdata: any) {
    _url = this.apiUrl + _url+"/"+_params;
    return this.http.put(_url, _putdata, { withCredentials: true }).pipe(catchError(this.handleError));
}
DeleteData(_url: string, _deletedata: any) {
    _url = this.apiUrl + _url+"/"+_deletedata;
    return this.http.delete(_url, { withCredentials: true }).pipe(catchError(this.handleError));
}
private handleError(error: Response) {
  return throwError(error);
} 
}

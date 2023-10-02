import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ÏAutenticar } from '../interfaces/autenticar.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl:string = 'http://localhost:3000/api' 

  constructor(private _http:HttpClient) { }

  public login(objReq: any): Observable<ÏAutenticar>{
    return this._http.post<ÏAutenticar>(this.baseUrl + "/usuario/login", objReq)
  }

  public guardar(objReq:any):Observable<boolean>{
    return this._http.post<boolean>(this.baseUrl + '/usuario/crear', objReq);
  }

  public listar(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl + '/usuario/listar');
  }

  public obtener(objReq:any): Observable<any>{
    return this._http.post<any>(this.baseUrl + '/usuario/obtener', objReq);
  }

  public actualizar(objReq:any):Observable<boolean>{
    return this._http.post<boolean>(this.baseUrl + '/usuario/actualizar', objReq);
  }

  public eliminar(objReq:any):Observable<boolean>{
    return this._http.post<boolean>(this.baseUrl + '/usuario/eliminar', objReq);
  }

}

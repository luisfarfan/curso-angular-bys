import {Injectable} from '@angular/core';
import {BASE_URL} from "../domain";
import {Http} from "@angular/http";
import {extractData, handleError} from '../utils';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {IProducto} from "./interfaces/producto.interface";

@Injectable()
export class ProductoService {
  private urlProductos = `${BASE_URL}posbys/producto/buscar/`;

  constructor(private http: Http) {
  }

  getProductos(queryString: string): Observable<IProducto[]> {
    // return this.http.get(this.urlProductos + '?q=' + queryString)
    return this.http.get(`${this.urlProductos}?q=${queryString}`)
      .map(extractData)
      .catch(handleError)
  }

}

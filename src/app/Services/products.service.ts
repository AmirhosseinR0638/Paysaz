import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Cpu } from './Models/ICpu';
import { Observable } from 'rxjs';
import { product } from './Models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseApiUrl: string = environment.BaseApiUrl;
  private http = inject(HttpClient);
  getCpuList() {
    return this.http.get(this.baseApiUrl + '/cpu/list');
  }
  getGpuList() {
    return this.http.get(this.baseApiUrl + '/gpu/list');
  }
  getCoolerList() {
    return this.http.get(this.baseApiUrl + '/cooler/list');
  }
  getRamList() {
    return this.http.get(this.baseApiUrl + '/ram/list');
  }
  getPowerSupplyList() {
    return this.http.get(this.baseApiUrl + '/supply/list');
  }
  getSsdList() {
    return this.http.get(this.baseApiUrl + '/ssd/list');
  }
  getMotherBoardList() {
    return this.http.get(this.baseApiUrl + '/motherboard/list');
  }
  compatibleProduct(productsID: number[], type: string) {
    if (type == '') {
      return this.http.post(this.baseApiUrl + '/compatible', {
        products_iD: productsID,
      });
    }
    return this.http.post(
      this.baseApiUrl + '/compatible',
      { products_iD: productsID },
      {
        params: { type: type },
      }
    );
  }
}

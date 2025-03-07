import { PurchaseDetail } from './IPurchaseDetail';

export interface Purchase {
  message: string;
  data: PurchaseDetail[];
}

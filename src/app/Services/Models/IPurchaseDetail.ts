export interface PurchaseDetail {
  products: [
    {
      brand: string;
      model: string;
      category: string;
      price: number;
      quantity: number;
    }
  ];
  total_price: number;
}

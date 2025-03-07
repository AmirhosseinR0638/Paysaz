export interface CartStatus {
  message: string;
  data: {
    carts: [
      {
        cart_number: number;
        cart_status: string;
      }
    ];
    available_carts: number;
  };
}

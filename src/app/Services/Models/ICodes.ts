export interface Code {
  message: string;
  data: {
    discounts: [{ codes: number }];
    gifts: { gifted_code: number };
  };
}
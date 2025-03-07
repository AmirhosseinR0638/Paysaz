export interface UserDetail {
  first_name: string;
  last_name: string;
  wallet_balance: number;
  referral_code: string;
  countUserReffer: number;
  time_stamp: string;
  vip_detail: {
    is_VIP: boolean;
    remaining_time: number;
    profit: number;
  };
}

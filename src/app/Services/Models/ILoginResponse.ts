import { User } from "./IUser";

export interface LoginResponse {
  data: string | User;
  message: string;
}

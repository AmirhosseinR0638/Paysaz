import { inject } from '@angular/core';
import { UserService } from './Services/user.service';

export function isLoggedIn() {
  var userService = inject(UserService);
  return userService.isUserLoggedIn();
}

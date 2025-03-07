import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../Services/Models/IUser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  userService: UserService = inject(UserService);
  username: string = ' ';
  logOut() {
    this.userService.LogOut();
  }
  ngOnInit() {
    this.userService.isLoggedIn.subscribe({
      next: (isLoggedIn: boolean) => {
        if (isLoggedIn && localStorage.getItem('FN') != null) {
          this.username =
            localStorage.getItem('FN') + ' ' + localStorage.getItem('LN');
        }
        else{
          this.username = ' ';
        }
      },
    });
  }
}

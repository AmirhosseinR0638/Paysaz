import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterEvent, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../Services/user.service';

export interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  router: Router = inject(Router);
  menuItem: MenuItem[] = [
    { title: 'اطلاعات کلی', route: 'general' },
    { title: 'آدرس ها', route: 'addresses' },
    { title: 'کدهای تخفیف', route: 'codes' },
    { title: 'سبدهای خرید', route: 'cartStatus' },
    { title: 'تاریخچه خرید‌ها', route: 'purchaseHistory' },
  ];
}

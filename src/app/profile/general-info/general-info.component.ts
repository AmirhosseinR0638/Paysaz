import { Component, inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Services/Models/IUser';
import { UserDetail } from '../../Services/Models/IUserDetail';
import { PersianConverterPipe } from '../../Pipes/persian-converter.pipe';
import { LoaderComponent } from '../../common/loader/loader.component';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [PersianConverterPipe, LoaderComponent],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss',
})
export class GeneralInfoComponent {
  userService: UserService = inject(UserService);
  user: UserDetail;
  icon: string = './../../../assets/img/copy.svg';
  getUserInformation() {
    this.userService.getUserInfo().subscribe({
      next: (value: User) => {
        this.user = value.data;
        localStorage.setItem('FN', this.user.first_name);
        localStorage.setItem('LN', this.user.last_name);
        this.userService.isLoggedIn.next(true);
        this.userService.isVIP.next(this.user.vip_detail.is_VIP);
      },
    });
  }
  copyReferralCode() {
    navigator.clipboard.writeText(this.user.referral_code);
    this.icon = './../../../assets/img/copied.svg';
    setTimeout(() => {
      this.icon = './../../../assets/img/copy.svg';
    }, 2000);
  }
  ngOnInit() {
    this.getUserInformation();
  }
}

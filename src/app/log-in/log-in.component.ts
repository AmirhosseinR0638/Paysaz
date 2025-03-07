import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewContainerRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../Services/user.service';
import { LoginResponse } from '../Services/Models/ILoginResponse';
import { Router } from '@angular/router';
import { NotificationComponent } from '../common/notification/notification.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent implements OnInit {
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  componentMaker: ViewContainerRef = inject(ViewContainerRef);
  showLoader: boolean = false;
  form = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(),
  });
  onSubmit() {
    this.showLoader = true;
    const phoneNumber = this.form.controls['phoneNumber'].value;
    this.userService.logIn(phoneNumber).subscribe({
      next: (value: LoginResponse) => {
        this.showLoader = false;
        if (value.data != null) {
          localStorage.setItem('TK', `Bearer ${value.data.toString()}`);
          this.router.navigateByUrl('/profile/general');
          this.userService.isLoggedIn.next(true);
        } else {
          this.showNotif('کاربری با این شماره ثبتنام نشده است.');
        }
      },
      error: () => {
        this.showLoader = false;
        this.showNotif('شماره تلغن نامعتبر است.');
      },
    });
  }
  ngOnInit() {
    this.userService.LogOut();
    localStorage.clear();
  }
  showNotif(msg: string) {
    let notif = this.componentMaker.createComponent(NotificationComponent);
    notif.instance.title = 'خطا';
    notif.instance.type = 'خطا';
    notif.instance.message = msg;
    setTimeout(() => {
      notif.destroy();
    }, 2000);
  }
}

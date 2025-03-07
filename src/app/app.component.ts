import {
  Component,
  importProvidersFrom,
  inject,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import {
  NavigationCancel,
  NavigationError,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationComponent } from './common/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'پی‌ساز';
  router: Router = inject(Router);
  componentMaker: ViewContainerRef = inject(ViewContainerRef);
  ngOnInit() {
    this.router.events.subscribe({
      next: (value) => {
        if (value instanceof NavigationCancel) {
          let notif = this.componentMaker.createComponent(
            NotificationComponent
          );
          notif.instance.title = 'توجه';
          notif.instance.type = 'توجه';
          notif.instance.message = 'لطفا ابتدا وارد حساب کاربری شود.';
          setTimeout(() => {
            notif.destroy();
          }, 2000);
          this.router.navigateByUrl('log-in');
        }
      },
    });
  }
}

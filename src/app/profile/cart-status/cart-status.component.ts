import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CartStatus } from '../../Services/Models/ICartStatus';
import { map } from 'rxjs';
import { EmptyContentComponent } from '../../common/empty-content/empty-content.component';
import { LoaderComponent } from '../../common/loader/loader.component';
import { PersianConverterPipe } from '../../Pipes/persian-converter.pipe';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [LoaderComponent, PersianConverterPipe, EmptyContentComponent],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.scss',
})
export class CartStatusComponent implements OnInit {
  userService: UserService = inject(UserService);
  carts = null;
  numberOfAvailableCarts = null;
  getCartStatus() {
    this.userService.getCardStatus().subscribe({
      next: (value: CartStatus) => {
        this.carts = value.data?.carts;
        this.numberOfAvailableCarts = value.data?.available_carts;
      },
    });
  }
  ngOnInit() {
    this.getCartStatus();
  }
}

import { Component, inject, OnInit, ViewContainerRef } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { PurchaseDetail } from '../../Services/Models/IPurchaseDetail';
import { PersianConverterPipe } from '../../Pipes/persian-converter.pipe';
import { PurchaseDetailComponent } from './purchase-detail/purchase-detail.component';
import { LoaderComponent } from '../../common/loader/loader.component';
import { EmptyContentComponent } from '../../common/empty-content/empty-content.component';
import { NotificationComponent } from '../../common/notification/notification.component';

@Component({
  selector: 'app-purchase-history',
  standalone: true,
  imports: [
    PersianConverterPipe,
    PurchaseDetailComponent,
    LoaderComponent,
    EmptyContentComponent,
  ],
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.scss',
})
export class PurchaseHistoryComponent implements OnInit {
  showDetailComponent: boolean = false;
  userService: UserService = inject(UserService);
  noif: ViewContainerRef = inject(ViewContainerRef);
  purchases: PurchaseDetail[] = null;
  purchaseDTO: PurchaseDetail = null;
  getPurchases() {
    this.userService.getUserPurchases().subscribe({
      next: (value: any) => {
        this.purchases = value.data;
      },
    });
  }
  showDetail(purchase: PurchaseDetail) {
    this.showDetailComponent = true;
    this.purchaseDTO = purchase;
  }
  ngOnInit(): void {
    this.getPurchases();
  }
}

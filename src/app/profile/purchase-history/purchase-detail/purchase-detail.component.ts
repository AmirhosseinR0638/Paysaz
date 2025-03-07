import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PurchaseDetail } from '../../../Services/Models/IPurchaseDetail';
import { PersianConverterPipe } from '../../../Pipes/persian-converter.pipe';

@Component({
  selector: 'app-purchase-detail',
  standalone: true,
  imports: [PersianConverterPipe],
  templateUrl: './purchase-detail.component.html',
  styleUrl: './purchase-detail.component.scss',
})
export class PurchaseDetailComponent {
  @Input() Purchase: PurchaseDetail = null;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  closeComponent() {
    this.close.next(true);
  }
}

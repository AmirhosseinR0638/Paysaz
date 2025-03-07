import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Address } from '../../Services/Models/IAddress';
import { EmptyContentComponent } from '../../common/empty-content/empty-content.component';
import { LoaderComponent } from '../../common/loader/loader.component';
import { PersianConverterPipe } from '../../Pipes/persian-converter.pipe';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [EmptyContentComponent, LoaderComponent, PersianConverterPipe],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent implements OnInit {
  userService: UserService = inject(UserService);
  addresses: Address[] = null;
  getAddresses() {
    this.userService.getAddresses().subscribe({
      next: (value: any) => {
        this.addresses = [...value.data];
      },
    });
  }
  findAddress(address) {
    window.open(
      `http://maps.google.com/?q=${
        address['province'] + ' ' + address['remain_address']
      }`
    );
  }
  ngOnInit() {
    this.getAddresses();
  }
}

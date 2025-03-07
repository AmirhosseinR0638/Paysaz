import { Component, inject, OnInit, ViewContainerRef } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { UserService } from '../Services/user.service';
import { User } from '../Services/Models/IUser';
import { NotAccessibleComponent } from '../common/not-accessible/not-accessible.component';
import { LoaderComponent } from '../common/loader/loader.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { product } from '../Services/Models/IProduct';
import { ProductDetail } from '../Services/Models/IProductDetail';
import { MatchedProduct } from '../Services/Models/IMatchedProducts';
import { EmptyContentComponent } from '../common/empty-content/empty-content.component';
import { NotificationComponent } from '../common/notification/notification.component';
import { MatchedProductDetail } from '../Services/Models/IMatchedProductDetail';

@Component({
  selector: 'app-sazegaryab',
  standalone: true,
  imports: [
    NotAccessibleComponent,
    LoaderComponent,
    ReactiveFormsModule,
    EmptyContentComponent,
  ],
  templateUrl: './sazegaryab.component.html',
  styleUrl: './sazegaryab.component.scss',
})
export class SazegaryabComponent implements OnInit {
  filterOption = [
    { title: 'هیچکدام', value: '', isChecked: true },
    { title: 'CPU', value: 'cpu', isChecked: false },
    { title: 'GPU', value: 'gpu', isChecked: false },
    { title: 'RAM', value: 'ram', isChecked: false },
    { title: 'MotherBoard', value: 'motherBoard', isChecked: false },
    { title: 'PowerSupply', value: 'powerSupply', isChecked: false },
    { title: 'SSD', value: 'ssd', isChecked: false },
    { title: 'Cooler', value: 'cooler', isChecked: false },
  ];
  productService: ProductsService = inject(ProductsService);
  userService: UserService = inject(UserService);
  filterValue: string = '';
  isVIP: boolean = null;
  CpuList: ProductDetail[] = null;
  GpuList: ProductDetail[] = null;
  RamList: ProductDetail[] = null;
  HddList: ProductDetail[] = null;
  SsdList: ProductDetail[] = null;
  PowerSupplyList: ProductDetail[] = null;
  CoolerList: ProductDetail[] = null;
  MotherBoardList = null;
  matchedProducts: MatchedProductDetail[] = [];
  form: FormGroup = new FormGroup({
    Cpu: new FormControl(null),
    Gpu: new FormControl(null),
    Ssd: new FormControl(null),
    MotherBoard: new FormControl(null),
    PowerSupply: new FormControl(null),
    Ram: new FormControl(null),
    Cooler: new FormControl(null),
  });
  componentMaker: ViewContainerRef = inject(ViewContainerRef);
  onSubmit() {
    let productsId = [];
    for (const productId in this.form.value) {
      if (this.form.value[productId] != null) {
        productsId.push(this.form.value[productId]);
      }
    }
    if (productsId.length == 0) {
      let notif = this.componentMaker.createComponent(NotificationComponent);
      notif.instance.title = 'توجه';
      notif.instance.type = 'توجه';
      notif.instance.message = 'حداقل یک مورد باید انتخاب شود!';
      setTimeout(() => {
        notif.destroy();
      }, 2000);
    } else {
      this.getMatchedProduct(productsId, this.filterValue);
    }
  }
  getCPUs() {
    this.productService.getCpuList().subscribe({
      next: (value: product) => {
        this.CpuList = value.data;
      },
    });
  }
  getGPUs() {
    this.productService.getGpuList().subscribe({
      next: (value: product) => {
        this.GpuList = value.data;
      },
    });
  }
  getRAMs() {
    this.productService.getRamList().subscribe({
      next: (value: product) => {
        this.RamList = value.data;
      },
    });
  }
  getPowerSupplies() {
    this.productService.getPowerSupplyList().subscribe({
      next: (value: product) => {
        this.PowerSupplyList = value.data;
      },
    });
  }
  getMotherBoards() {
    this.productService.getMotherBoardList().subscribe({
      next: (value: product) => {
        this.MotherBoardList = value.data;
      },
    });
  }
  getCoolers() {
    this.productService.getCoolerList().subscribe({
      next: (value: product) => {
        this.CoolerList = value.data;
      },
    });
  }
  getSSDs() {
    this.productService.getSsdList().subscribe({
      next: (value: product) => {
        this.SsdList = value.data;
      },
    });
  }
  onFilter(filter) {
    this.filterValue = filter.target.value;
    this.onSubmit();
  }
  getMatchedProduct(productsId: number[], type: string) {
    this.productService.compatibleProduct(productsId, type).subscribe({
      next: (value: MatchedProduct) => {
        this.matchedProducts = value.data;
      },
    });
  }
  ngOnInit() {
    this.userService.getUserInfo().subscribe({
      next: (value: User) => {
        this.isVIP = value.data.vip_detail.is_VIP;
      },
    });
  }
}

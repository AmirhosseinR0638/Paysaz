import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Code } from '../../Services/Models/ICodes';
import { EmptyContentComponent } from '../../common/empty-content/empty-content.component';
import { LoaderComponent } from '../../common/loader/loader.component';
import { PersianConverterPipe } from '../../Pipes/persian-converter.pipe';

@Component({
  selector: 'app-codes',
  standalone: true,
  imports: [EmptyContentComponent, LoaderComponent, PersianConverterPipe],
  templateUrl: './codes.component.html',
  styleUrl: './codes.component.scss',
})
export class CodesComponent implements OnInit {
  userService: UserService = inject(UserService);
  icon: string = './../../../assets/img/copy.svg';
  discountCodes = null;
  giftedCode: number = null;
  isLoaded: boolean = false;
  getCodes() {
    this.userService.getCodes().subscribe({
      next: (value: Code) => {
        this.discountCodes = value.data.discounts;
        this.giftedCode = value.data.gifts.gifted_code;
        this.isLoaded = true;
      },
    });
  }
  copyCode(code: string, div: HTMLDivElement) {
    const iconSrc = div.childNodes
      .item(1)
      .childNodes.item(0) as HTMLImageElement; //Point to icon of that element when copied
    navigator.clipboard.writeText(code);
    iconSrc.attributes.getNamedItem('src').value =
      './../../../assets/img/copied.svg';
    setTimeout(() => {
      iconSrc.attributes.getNamedItem('src').value =
        './../../../assets/img/copy.svg';
    }, 2000);
  }
  ngOnInit() {
    this.getCodes();
  }
}

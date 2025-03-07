import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianConverter',
  standalone: true,
})
export class PersianConverterPipe implements PipeTransform {
  transform(value: any, isCurrency: boolean) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value
      ?.toString()
      .replace(/\d/g, (match) => persianNumbers[parseInt(match)]);
  }
}

import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate',
  pure: false
})
export class LocalDatePipe implements PipeTransform {
  constructor() {}

  transform(value: Date, pattern: string = 'mediumDate'): string {
    let lang = 'en';
    const datePipe: DatePipe = new DatePipe(lang);
    return <string>datePipe.transform(value, pattern);
  }
}

// Dependencies
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText',
})
export class SearchTextPipe implements PipeTransform {
  private removeAccents(str): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  transform(items: { name; total }[], args: { key; value }): unknown {
    if (!items) {
      return [];
    }
    const { key, value } = args;
    if (!(key && value)) {
      return items;
    }
    if (value.length < 3) {
      return items;
    }
    return items.filter((item) => {
      return this.removeAccents(item[key]).toLowerCase().includes(this.removeAccents(value.toLowerCase()));
    });
  }
}

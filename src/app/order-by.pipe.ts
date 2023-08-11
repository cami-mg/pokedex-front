import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, order: 'asc' | 'desc' = 'asc', field?: string) {
    let multiply = 1;
    if (order === 'desc') {
      multiply = -1;
    }
    if (field) {
      return value.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1 * multiply;
        } else if (a[field] > b[field]) {
          return 1 * multiply;
        } else {
          return 0;
        }
      });
    } else {
      return value.sort((a: any, b: any) => {
        if (a < b) {
          return -1 * multiply;
        } else if (a > b) {
          return 1 * multiply;
        } else {
          return 0;
        }
      });
    }
  }
}

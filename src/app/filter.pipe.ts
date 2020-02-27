import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    // return null;
    return value.filter(function (search) {
      return search.value.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

}

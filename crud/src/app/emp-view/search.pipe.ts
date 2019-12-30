import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchString: string ) {

    if (!searchString) {
      return value;
    }

    return value.filter(it => {
      const designation = it.designation.toLowerCase().includes(searchString.toLowerCase());
      const name = it.name.toLowerCase().includes(searchString.toLowerCase());
      const salary = it.salary.toString().includes(searchString);
      return (name + designation + salary );
    });
 }
}

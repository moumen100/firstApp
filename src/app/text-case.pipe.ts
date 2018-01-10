import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCase'
})
export class TextCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) return null;
   
       let list=value.split(' ');
       for (let i=0 ; i<list.length; i++) {
             if (i!=0 && list[i].length<=4) {
              list[i].toLowerCase();
            }
               else { 
               list[i]= list[i].substr(0,1).toUpperCase() + list[i].substr(1).toLowerCase();
             }
       }
       return (list.join(' '));
  }

}

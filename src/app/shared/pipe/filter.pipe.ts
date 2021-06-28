import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsuario'

})
export class FilterPipe implements PipeTransform {

  transform(list: any[], text: string){

    if (!text) return list

    const lowerValue=text.toLocaleLowerCase();
    const compare =(originalValue:string)=>{
      return originalValue.toLocaleLowerCase().includes(lowerValue);
    }

    return list.filter((x)=> compare(x.identificacion))
  }
}
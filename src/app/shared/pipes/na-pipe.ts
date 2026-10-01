import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
})
export class NaPipe implements PipeTransform {
  transform(value: unknown, defaultCharacter?:string): unknown {
    if(value===undefined||value===''||value===null)
    {
      if(defaultCharacter===undefined){
        return '--'
      }
      else{
        return defaultCharacter
      }
    }
    else{
      return value
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataProperty'
})
export class DataPropertyPipe implements PipeTransform {

  transform(object: any, keyName: string, ...args: unknown[]): unknown {
    return object[keyName];
  }

}

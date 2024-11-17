import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maskedName',
  standalone: true
})
export class MaskedNamePipe implements PipeTransform {

  transform(value: string): string {
    const nameParts = value.split(' ');
    const [firstName, ...otherNames] = nameParts;
    return [
      firstName,
      ...otherNames.map(n => n.charAt(0) + '***')
    ].join(' ');
  }

}

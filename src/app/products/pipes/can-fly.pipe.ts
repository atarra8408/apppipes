import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'El super héroe vuela'|'El super héroe no vuela' {
    return (value)?'El super héroe vuela':'El super héroe no vuela';
  }

}

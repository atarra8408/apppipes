import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | '', ordenAcendente?: boolean): Hero[] {
    switch(sortBy){
      case 'name':
        return (ordenAcendente)?
          heroes.sort((a,b) => (a.name > b.name)? 1 : -1):
          heroes.sort((a,b) => (a.name < b.name)? 1 : -1);
      case 'canFly':
        return (ordenAcendente)?
         heroes.sort((a,b) => (a.canFly > b.canFly)? 1 : -1):
         heroes.sort((a,b) => (a.canFly < b.canFly)? 1 : -1);
      case 'color':
        return (ordenAcendente)?
          heroes.sort((a,b) => (a.color > b.color)? 1 : -1):
          heroes.sort((a,b) => (a.color < b.color)? 1 : -1);
      default:
        return heroes;
    }
  }

}

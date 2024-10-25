import { Pipe, PipeTransform } from "@angular/core";

//juan | toggleCase = JUAN
//JUAN | toggleCase = juan

@Pipe({
  name:'toggleCase'
})
export class ToogleCasePipe implements PipeTransform{

  transform(value: string, toUpper: boolean = false): string {
    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase();
  }

}

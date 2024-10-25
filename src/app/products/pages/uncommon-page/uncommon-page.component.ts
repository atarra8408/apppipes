import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name:string = 'Juan';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Caro';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[]=['Maria', 'Eduardo', 'Pedro','Fernando', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ninún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void{
    this.clients.shift();
  }

  //keyValu Pipe

  public person = {
    name: 'Juan',
    age: 40,
    address: 'Ottawa, Canada'
  }

  //async Pipe
  public myObservableTimer: Observable<number> = interval(20000).pipe(
    tap(value => console.log('tap',value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=> {
      resolve('Tenemos data en la promesa.')
    },3500);
  })
}

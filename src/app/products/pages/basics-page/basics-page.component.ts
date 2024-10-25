import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'juan'
  public nameUpper: string = 'JUAN'
  public fullName: string = 'jUaN pAbLo sAncHez'

  public customDate: Date = new Date();
}

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localEsCO from '@angular/common/locales/es-CO';
import localFrCA from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common';


registerLocaleData(localEsCO);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

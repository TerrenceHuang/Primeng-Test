import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Primeng
import { AccordionModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AccordionPageComponent } from './components/accordion-page/accordion-page.component';
import { AccordionRecursivePageComponent } from './components/accordion-recursive-page/accordion-recursive-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AccordionPageComponent,
    AccordionRecursivePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

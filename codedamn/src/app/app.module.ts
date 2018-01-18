import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BluecoloredDirective } from './bluecolored.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BluecoloredDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

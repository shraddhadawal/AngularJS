import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ HomeComponent, ROUTER_DIRECTIVES, HTTP_PROVIDERS ]
})
export class AppComponent {

title="app working!!";
}

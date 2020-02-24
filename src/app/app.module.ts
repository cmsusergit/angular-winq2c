import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Test1Component } from './test1/test1.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { BdetailComponent } from './bdetail/bdetail.component';
@NgModule({
  imports:      [ BrowserModule, 
  NgbModule,
  FormsModule ],

  declarations: [
    AppComponent, 
    HelloComponent, 
    MaincontentComponent,
    Test1Component,
    BdetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

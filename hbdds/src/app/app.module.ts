import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GreetComponent } from './greet/greet.component';
import { Password123Component } from './password123/password123.component';
import { ConstantComponent } from './constant/constant.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GreetComponent,
    Password123Component,
    ConstantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

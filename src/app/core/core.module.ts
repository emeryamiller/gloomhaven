import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIModule } from './ui.module';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UIModule,
    RoutingModule
  ],
  declarations: [
  ],
  exports: [
    UIModule,
    RoutingModule
  ]
})
export class CoreModule { }

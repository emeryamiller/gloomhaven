import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIModule } from './ui.module';
import { RoutingModule } from './routing.module';

import { NotFoundComponent } from '../common/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UIModule,
    RoutingModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    UIModule,
    RoutingModule
  ]
})
export class CoreModule { }

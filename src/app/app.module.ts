import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { LibraryModule } from './library/library.module';
import { PlayModule } from './play/play.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LibraryModule,
    CoreModule,
    PlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

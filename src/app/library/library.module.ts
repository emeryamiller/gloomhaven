import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { LibraryComponent } from './library.component';
import { EditMonsterComponent } from './edit-monster/edit-monster.component';
import { ShowMonsterComponent } from './show-monster/show-monster.component';
import { LibraryRoutingModule } from './library-routing.module';
import { EmptyMonsterComponent } from './empty-monster/empty-monster.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CoreModule,
  ],
  declarations: [
    LibraryComponent,
    EditMonsterComponent,
    ShowMonsterComponent,
    EmptyMonsterComponent,
  ]
})
export class LibraryModule { }

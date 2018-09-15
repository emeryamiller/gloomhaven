import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';
import { ShowMonsterComponent } from './show-monster/show-monster.component';
import { EditMonsterComponent } from './edit-monster/edit-monster.component';
import { EmptyMonsterComponent } from './empty-monster/empty-monster.component';

const routes: Routes = [
  {path: 'library', component: LibraryComponent, children: [
    {path: '', component: EmptyMonsterComponent},
    {path: ':id', component: ShowMonsterComponent},
    {path: ':id/edit', component: EditMonsterComponent},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class LibraryRoutingModule { }

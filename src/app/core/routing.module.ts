import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '../common/not-found/not-found.component';
import { PlayComponent } from '../play/play.component';
import { LibraryComponent } from '../library/library.component';

const routes: Routes = [
  {path: '', redirectTo: 'play', pathMatch: 'full'},
  {path: 'library', component: LibraryComponent},
  {path: 'play', component: PlayComponent},
  {path: 'not_found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not_found'},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }


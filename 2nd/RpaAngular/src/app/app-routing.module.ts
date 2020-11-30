import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DialogDoxComponent} from './dialog-dox/dialog-dox.component'
import { from } from 'rxjs';
import {DocViewerComponent} from  './doc-viewer/doc-viewer.component'

const routes: Routes = [
  { path:"docs",component:DocViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const Routing=[DialogDoxComponent,DocViewerComponent]

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routing} from './app-routing.module';
import { DialogDoxComponent } from './dialog-dox/dialog-dox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module'
import { from } from 'rxjs';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';




@NgModule({
  declarations: [
    AppComponent,
    Routing,
    DocViewerComponent,
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

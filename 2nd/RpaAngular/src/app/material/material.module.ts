import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion'
import { from } from 'rxjs';


const MaterialComponent=[
  MatExpansionModule

]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponent
  ],
  exports:[MaterialComponent]
})
export class MaterialModule { }

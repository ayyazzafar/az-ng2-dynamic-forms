import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormBasicComponent} from "./dynamic-form-basic.component"
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  declarations: [DynamicFormBasicComponent], 
  exports:[DynamicFormBasicComponent, ReactiveFormsModule]
})
export class AzNg2DynamicFormsBasicUIModule { }

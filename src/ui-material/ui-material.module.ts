import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormMaterialComponent} from "./dynamic-form-material/dynamic-form-material.component"
import { ReactiveFormsModule } from '@angular/forms';
import{MaterialModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,  
    BrowserAnimationsModule,MdInputModule
  ],
  declarations: [DynamicFormMaterialComponent], 
  exports:[ DynamicFormMaterialComponent, ReactiveFormsModule, MdInputModule]
})
export class AzNg2DynamicFormsMaterialModule { }

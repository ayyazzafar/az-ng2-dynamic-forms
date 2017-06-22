# az-ng2-dynamic-forms

## Installation

To install this library, run:

```bash
$ npm install az-ng2-dynamic-forms --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install az-ng2-dynamic-forms
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AzNg2DynamicFormsModule } from 'az-ng2-dynamic-forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    AzNg2DynamicFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use it in your Angular application:

## Example:

app.component.html

```xml
<!-- You can now use your library component in app.component.html -->

  <form [formGroup]="formGroup" class="container">
  
      <dynamic-form-material-control 
      *ngFor="let model of formModel"
      [group]="formGroup"
      [model] = "model"
    
      ></dynamic-form-material-control>

      <button class="btn btn-danger" (click)="removeArrayControl(0, 'screenshots')">Delete</button>
      <button  class="btn btn-primary" (click)="add('screenshots')">Add</button>
      <br><br><br><br>
      <pre>{{stringify(formGroup.value)}}</pre>
</form>
```

app.component.ts

```typescript

import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

import {PROJECT_FORM_MODEL} from "./fields.model";
import {FieldTextarea, FieldTextbox, FieldArray} from "az-ng2-dynamic-forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  stringify(obj)
  {
    return JSON.stringify(obj, undefined, 2);
  }

  screenshotsArrayControl;
  screenshotsArrayModel;

  formModel;
  formGroup: FormGroup;

  constructor(
    private dynamicFormService:DynamicFormService){

      this.formModel = PROJECT_FORM_MODEL;
      this.formGroup = this.dynamicFormService.createFormGroup(this.formModel);

      this.screenshotsArrayModel = this.dynamicFormService.findById('screenshots', this.formModel);
      this.screenshotsArrayControl = this.formGroup.controls['screenshots'];
  }


    remove(index:number, key){
       this.dynamicFormService.removeControl( key, index, this.formGroup, this.formModel);
    }


    removeArrayControl(arrayIndex, key){
      this.dynamicFormService.removeFormArrayGroup(arrayIndex, this.screenshotsArrayControl, this.screenshotsArrayModel);

    }

    add(key){
      let field = new FieldTextbox({
        type: 'text',
        key: 'hello_world',
        classes: 'form-control',
        placeholder: 'Hello World :)'
      });

      this.dynamicFormService.add(field, this.formGroup.controls[key], this.screenshotsArrayModel);
      this.formGroup.updateValueAndValidity();
      this.formGroup.updateValueAndValidity();

    }
}
 

```

fields.model.ts (Your Form Fields)

```typescript

  import { FieldTextbox, FieldTextarea, FieldArray } from "az-ng2-dynamic-forms";

export const PROJECT_FORM_MODEL = [
    new FieldTextbox({
        type: 'text',
        key: 'title',
        placeholder: 'Title',
        classes: 'form-control',
        value: 'abc'

    }),

    new FieldTextbox({
        type: 'text',
        key: 'skills',
        placeholder: 'Skills',
        classes: 'form-control',

    }),


    new FieldTextarea({
        key: 'description',
        type: 'textarea',
        placeholder: 'Description',
        classes: 'form-control',
        rows: 4
    }),


    new FieldArray({
        key: 'screenshots',
        values: [
            new FieldTextbox({
                key: 'screenshot',
                type: 'text',
                classes: 'form-control',
                placeholder: 'Screenshot 1'
            }),

            new FieldTextbox({
                key: 'screenshot',
                type: 'text',
                classes: 'form-control',
                placeholder: 'Screenshot 2'
            }),

            new FieldTextbox({
                key: 'screenshot',
                type: 'text',
                classes: 'form-control',
                placeholder: 'Screenshot 3'
            }),

            new FieldArray({
                key: 'books',
                values: [
                    new FieldTextbox({
                        key: 'book1',
                        type: 'text',
                        classes: 'form-control',
                        placeholder: 'Book 1'
                    }),

                    new FieldTextbox({
                        key: 'book2',
                        type: 'text',
                        classes: 'form-control',
                        placeholder: 'Book 2'
                    }),
                ]
            })
        ]
    })
];


```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ayyaz](mailto:contact@ayyaz.io)

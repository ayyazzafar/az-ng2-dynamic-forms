import {Injectable, Inject} from "@angular/core";
import { FormGroup, AbstractControl, FormControl, FormBuilder, FormArray } from "@angular/forms";
import {FieldArray, FieldTextarea, FieldTextbox} from "../../";

@Injectable()
export class DynamicFormService{

    constructor(private formBuilder:FormBuilder){

    }
    createFormGroup(group:Array<FieldArray | FieldTextarea | FieldTextbox>):FormGroup{

        let formGroup={}
        // model means field
        group.forEach(model=>{

            if(model.controlType==='array')
            {
                let arrayModel = model as FieldArray;
                formGroup[arrayModel.key] = this.createFormArray(arrayModel);
            }
            else
            {
                let controlModel = model;
                formGroup[controlModel.key] = [controlModel.value];
            }

        }); 


        return this.formBuilder.group(formGroup);
    }


    createFormArray(model:FieldArray):FormArray
    {
        let formArray:Array<FormGroup> = [];
        
        let i =0;
        model.values.forEach(model=>{
            formArray.push(this.createFormGroup([model]));
            i++;
        });

        return this.formBuilder.array(formArray);
        

    }


    removeFormArrayGroup(index, arrayControl:FormArray, model:FieldArray)
    {
        arrayControl.removeAt(index);
        model.removeGroup(index);
    }

    removeControl( key, index,  formGroup, formModel){
        formGroup.removeControl(key);
        formModel.splice(index, 1);
    }

    findById(key:string, groupModel:Array<FieldArray| FieldTextbox| FieldTextarea>):FieldArray| FieldTextbox| FieldTextarea
    {
        let result;
        groupModel.forEach((model, index)=>{
           
                if(model.key==key)
                {
                    result = model; 
                    return;
                }
           
        });


        return result;
    }

    add(field, arrayControl, model)
    {
        let group = this.createFormGroup([field]);
        console.log(arrayControl);
        arrayControl.push(group);
         console.log(arrayControl);
         model.values.push(field);
    }

}
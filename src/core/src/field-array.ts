import { FieldBase } from "./field-base";
import { FieldTextarea, FieldTextbox } from "../";

export class FieldArray extends FieldBase {

    controlType = 'array';
    values:Array<FieldTextbox | FieldTextarea>;
    constructor(options:{} = {}){
        super(options);

        this.values = options['values'];
    }

    removeGroup(index)
    {
        this.values.splice(index, 1);
    }
}
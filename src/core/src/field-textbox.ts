import { FieldBase } from "./field-base";

export class FieldTextbox extends FieldBase {

    type:string;
    controlType = 'textbox';
    placeholder:string;
    constructor(options:{} = {}){
        super(options);
        this.type = options['type'] || '';
        this.placeholder = options['placeholder'] || '';
    }
}
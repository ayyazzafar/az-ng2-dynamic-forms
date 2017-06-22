import { FieldBase } from "./field-base";

export class FieldTextarea extends FieldBase {

    cols?:number;
    rows?:number;
    controlType = 'textarea';
    placeholder:string;
    constructor(options:{} = {}){
        super(options);
        this.cols = options['cols'] || '';
        this.rows = options['rows'] || '';
        this.placeholder = options['placeholder'] || '';
    }
}
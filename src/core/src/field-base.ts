export class FieldBase {
    key: string;
    title?: string;
    label?: string;
    value?: string;
    classes?: string;
    parentClasses?: string;
    controlType:string;
    required:boolean;
    

    
    constructor(options:{
        value?:string,
        key?:string,
        controlType?:string,
        title?:string,
        label?:string,
        classes?: string;
        parentClasses?:'',
        required?:boolean;

    }){

        this.key = options.key;
        this.value = options.value || '';
        this.controlType = options.controlType || '';
        
        this.label = options.label || '';
        this.title = options.title || this.label || '';
        this.classes = options.classes || '';
        this.parentClasses = options.parentClasses || '';
        this.required = !!options.required

    }

}

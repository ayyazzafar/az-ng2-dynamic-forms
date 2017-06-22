import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'dynamic-form-basic-control',
  templateUrl: './dynamic-form-basic.component.html',
  styleUrls: ['./dynamic-form-basic.component.css']
})
export class DynamicFormBasicComponent implements OnInit {

  @Input() group:FormGroup;
  @Input() model;
  @Input() groupControl;
  @Input() groupControlIndex;
  constructor() { }

  ngOnInit() {
    console.log('onInit','key', this.model.key, 'type', this.model.controlType,  'groupControl', this.groupControl, 'groupControlIndex', this.groupControlIndex); console.log(this.group);
    console.log('model');
    console.log(this.model);
  }
  
}
 
import { Component, OnInit, Input, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'dynamic-form-material-control',
  templateUrl: './dynamic-form-material.component.html',
  styleUrls: ['./dynamic-form-material.component.css'], 
  animations:[
    
    trigger('itemEnter', [
      state('in', style({translate:'translateY(0)'})), 
      transition('void=>*', [
        style({  opacity:0}), 
        animate('300ms ease-in', keyframes([
          style({transform:'translateY(10%)', opacity:0, offset:0}), 
          style({transform:'translateY(-5px)', opacity:0.5, offset:0.3}), 
          style({transform:'translateY(-10px)', opacity:1, offset:0.6}), 
          style({transform:'translateY(0%)', opacity:1, offset:1}), 
        ]))
      ]),
      transition('* => void', [
        
        animate('300ms ease-out', keyframes([
          style({transform:'translateY(-15px)', opacity:1, offset:0.7}),
          style({transform:'translateY(15px)', opacity:0, offset:1}),
        ]))
      ])
    ])]
})
export class DynamicFormMaterialComponent implements OnInit {

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

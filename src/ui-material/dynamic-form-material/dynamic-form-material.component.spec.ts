import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormMaterialComponent } from './dynamic-form-material.component';

describe('DynamicFormMaterialComponent', () => {
  let component: DynamicFormMaterialComponent;
  let fixture: ComponentFixture<DynamicFormMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

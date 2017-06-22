import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormBasicComponentComponent } from './dynamic-form-basic-component.component';

describe('DynamicFormBasicComponentComponent', () => {
  let component: DynamicFormBasicComponentComponent;
  let fixture: ComponentFixture<DynamicFormBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormBasicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

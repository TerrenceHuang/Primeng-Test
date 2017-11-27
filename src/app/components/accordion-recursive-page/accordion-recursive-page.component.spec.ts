import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionRecursivePageComponent } from './accordion-recursive-page.component';

describe('AccordionRecursivePageComponent', () => {
  let component: AccordionRecursivePageComponent;
  let fixture: ComponentFixture<AccordionRecursivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionRecursivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionRecursivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

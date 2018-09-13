import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenFamilyComponent } from './children-family.component';

describe('ChildrenFamilyComponent', () => {
  let component: ChildrenFamilyComponent;
  let fixture: ComponentFixture<ChildrenFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

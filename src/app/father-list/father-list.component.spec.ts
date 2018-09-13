import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherListComponent } from './father-list.component';

describe('FatherListComponent', () => {
  let component: FatherListComponent;
  let fixture: ComponentFixture<FatherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

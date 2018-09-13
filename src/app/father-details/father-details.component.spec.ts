import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherDetailsComponent } from './father-details.component';

describe('FatherDetailsComponent', () => {
  let component: FatherDetailsComponent;
  let fixture: ComponentFixture<FatherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnisComponent } from './ignis.component';

describe('IgnisComponent', () => {
  let component: IgnisComponent;
  let fixture: ComponentFixture<IgnisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

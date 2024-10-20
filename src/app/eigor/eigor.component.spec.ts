import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EigorComponent } from './eigor.component';

describe('EigorComponent', () => {
  let component: EigorComponent;
  let fixture: ComponentFixture<EigorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EigorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EigorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

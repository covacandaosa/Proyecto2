import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovaComponent } from './cova.component';

describe('CovaComponent', () => {
  let component: CovaComponent;
  let fixture: ComponentFixture<CovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

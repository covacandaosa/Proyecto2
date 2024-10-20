import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaraComponent } from './elara.component';

describe('ElaraComponent', () => {
  let component: ElaraComponent;
  let fixture: ComponentFixture<ElaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

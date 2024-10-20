import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HippieComponent } from './hippie.component';

describe('HippieComponent', () => {
  let component: HippieComponent;
  let fixture: ComponentFixture<HippieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HippieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HippieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

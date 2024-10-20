import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaelComponent } from './aquael.component';

describe('AquaelComponent', () => {
  let component: AquaelComponent;
  let fixture: ComponentFixture<AquaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

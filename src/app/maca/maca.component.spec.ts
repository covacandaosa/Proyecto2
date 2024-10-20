import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacaComponent } from './maca.component';

describe('MacaComponent', () => {
  let component: MacaComponent;
  let fixture: ComponentFixture<MacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

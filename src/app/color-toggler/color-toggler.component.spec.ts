import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTogglerComponent } from './color-toggler.component';

describe('ColorTogglerComponent', () => {
  let component: ColorTogglerComponent;
  let fixture: ComponentFixture<ColorTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

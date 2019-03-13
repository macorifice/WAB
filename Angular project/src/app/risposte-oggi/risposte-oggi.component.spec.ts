import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisposteOggiComponent } from './risposte-oggi.component';

describe('RisposteOggiComponent', () => {
  let component: RisposteOggiComponent;
  let fixture: ComponentFixture<RisposteOggiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisposteOggiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisposteOggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

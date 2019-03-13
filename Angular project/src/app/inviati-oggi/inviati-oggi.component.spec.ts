import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviatiOggiComponent } from './inviati-oggi.component';

describe('InviatiOggiComponent', () => {
  let component: InviatiOggiComponent;
  let fixture: ComponentFixture<InviatiOggiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviatiOggiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviatiOggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

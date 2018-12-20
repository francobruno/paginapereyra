import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnosotrosComponent } from './regnosotros.component';

describe('RegnosotrosComponent', () => {
  let component: RegnosotrosComponent;
  let fixture: ComponentFixture<RegnosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegnosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegnosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

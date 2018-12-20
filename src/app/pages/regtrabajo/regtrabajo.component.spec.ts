import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegtrabajoComponent } from './regtrabajo.component';

describe('RegtrabajoComponent', () => {
  let component: RegtrabajoComponent;
  let fixture: ComponentFixture<RegtrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegtrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegtrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

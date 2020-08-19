import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBasicComponent } from './spring-basic.component';

describe('SpringBasicComponent', () => {
  let component: SpringBasicComponent;
  let fixture: ComponentFixture<SpringBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

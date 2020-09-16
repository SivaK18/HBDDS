import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Password123Component } from './password123.component';

describe('Password123Component', () => {
  let component: Password123Component;
  let fixture: ComponentFixture<Password123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Password123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Password123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpageComponent } from './LoginpageComponent';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginpageComponent]
    });
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

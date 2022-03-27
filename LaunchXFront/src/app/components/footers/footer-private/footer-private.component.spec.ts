import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrivateComponent } from './footer-private.component';

describe('FooterPrivateComponent', () => {
  let component: FooterPrivateComponent;
  let fixture: ComponentFixture<FooterPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

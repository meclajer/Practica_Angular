import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAdministradorComponent } from './content-administrador.component';

describe('ContentAdministradorComponent', () => {
  let component: ContentAdministradorComponent;
  let fixture: ComponentFixture<ContentAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

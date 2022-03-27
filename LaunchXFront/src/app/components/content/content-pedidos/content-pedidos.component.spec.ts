import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPedidosComponent } from './content-pedidos.component';

describe('ContentPedidosComponent', () => {
  let component: ContentPedidosComponent;
  let fixture: ComponentFixture<ContentPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

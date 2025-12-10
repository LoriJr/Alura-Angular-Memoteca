import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamento } from './listar-pensamento';

describe('ListarPensamento', () => {
  let component: ListarPensamento;
  let fixture: ComponentFixture<ListarPensamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPensamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPensamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

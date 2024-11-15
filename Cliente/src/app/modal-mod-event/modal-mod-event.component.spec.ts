import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModEventComponent } from './modal-mod-event.component';

describe('ModalModEventComponent', () => {
  let component: ModalModEventComponent;
  let fixture: ComponentFixture<ModalModEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalModEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalModEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

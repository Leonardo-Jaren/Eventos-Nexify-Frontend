import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexAppComponent } from './nex-app.component';

describe('NexAppComponent', () => {
  let component: NexAppComponent;
  let fixture: ComponentFixture<NexAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NexAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NexAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

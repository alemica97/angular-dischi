import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoInfoComponent } from './disco-info.component';

describe('DiscoInfoComponent', () => {
  let component: DiscoInfoComponent;
  let fixture: ComponentFixture<DiscoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

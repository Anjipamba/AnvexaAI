import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apptopbar } from './apptopbar';

describe('Apptopbar', () => {
  let component: Apptopbar;
  let fixture: ComponentFixture<Apptopbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apptopbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apptopbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

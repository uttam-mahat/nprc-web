import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESubmissionComponent } from './e-submission.component';

describe('ESubmissionComponent', () => {
  let component: ESubmissionComponent;
  let fixture: ComponentFixture<ESubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

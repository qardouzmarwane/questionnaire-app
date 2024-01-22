import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxQuestionComponent } from './checkbox-question.component';

describe('CheckboxQuestionComponent', () => {
  let component: CheckboxQuestionComponent;
  let fixture: ComponentFixture<CheckboxQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

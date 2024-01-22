import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextQuestionComponent } from './input-text-question.component';

describe('InputTextQuestionComponent', () => {
  let component: InputTextQuestionComponent;
  let fixture: ComponentFixture<InputTextQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

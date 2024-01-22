import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectListQuestionComponent } from './select-list-question.component';

describe('SelectListQuestionComponent', () => {
  let component: SelectListQuestionComponent;
  let fixture: ComponentFixture<SelectListQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectListQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectListQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

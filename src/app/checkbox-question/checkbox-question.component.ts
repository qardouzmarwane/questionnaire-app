// src/app/checkbox-question/checkbox-question.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-question',
  template: `
    <div>
      <p>{{ question.questionText }}</p>
      <div *ngFor="let option of question.options">
        <input type="checkbox" [value]="option" /> {{ option }}
      </div>
    </div>
  `,
})
export class CheckboxQuestionComponent {
  @Input() question: any;
}

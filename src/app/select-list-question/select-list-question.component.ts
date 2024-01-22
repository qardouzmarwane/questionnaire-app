// src/app/select-list-question/select-list-question.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-list-question',
  template: `
    <div>
      <p>{{ question.questionText }}</p>
      <select>
        <option *ngFor="let option of question.options" [value]="option">{{ option }}</option>
      </select>
    </div>
  `,
})
export class SelectListQuestionComponent {
  @Input() question: any;
}

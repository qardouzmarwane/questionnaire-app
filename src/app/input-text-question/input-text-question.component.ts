// src/app/input-text-question/input-text-question.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-question',
  template: `
    <div>
      <p>{{ question.questionText }}</p>
      <input type="text" />
    </div>
  `,
})
export class InputTextQuestionComponent {
  @Input() question: any;
}

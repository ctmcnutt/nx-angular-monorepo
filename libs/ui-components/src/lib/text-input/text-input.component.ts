import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() placeholder: string = 'Enter Text...';
  @Input() disabled: boolean = false;
}

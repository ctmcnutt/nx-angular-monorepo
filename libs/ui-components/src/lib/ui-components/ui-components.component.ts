import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-components',
  imports: [CommonModule],
  templateUrl: './ui-components.component.html',
  styleUrl: './ui-components.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponentsComponent {}

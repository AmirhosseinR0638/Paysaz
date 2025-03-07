import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-content',
  standalone: true,
  imports: [],
  templateUrl: './empty-content.component.html',
  styleUrl: './empty-content.component.scss',
})
export class EmptyContentComponent {
  @Input({ required: true }) content: string = '';
}

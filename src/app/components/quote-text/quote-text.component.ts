import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.sass']
})
export class QuoteTextComponent {
  count: number;
  @Input() text: string;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  click() {
    this.count++;
    this.change.emit(this.count);
  }
}

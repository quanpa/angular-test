import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event): void {
    this.inputChange.emit(event.target.value);
  }
}

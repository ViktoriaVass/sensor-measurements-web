import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-button',
  templateUrl: './button-update.component.html',
  styleUrls: ['./button-update.component.scss']
})
export class ButtonUpdateComponent {
  @Input() showUpdateData!: boolean | undefined;
  @Output() toggleUpdateButtonClickedEvent = new EventEmitter();

  toggleUpdateButtonClicked() {
    this.toggleUpdateButtonClickedEvent.emit(!this.showUpdateData);
  }
}
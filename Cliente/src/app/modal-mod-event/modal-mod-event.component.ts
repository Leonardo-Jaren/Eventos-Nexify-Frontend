import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-mod-event',
  templateUrl: './modal-mod-event.component.html',
  styleUrl: './modal-mod-event.component.css'
})
export class ModalModEventComponent {
  @Input() modalTitle: string = '';
  @Input() modalMessage: string = '';
  @Input() showButtons: boolean = true;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}

}

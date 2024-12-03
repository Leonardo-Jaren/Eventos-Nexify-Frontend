import { Component } from '@angular/core';
import { Evento } from '../../../models/evento.model';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';
  isCancelAction: boolean = false;
  showButtons: boolean = true; // Controla la visibilidad de los botones
  onCancelEvent() {
    this.showModal = true;
    this.modalTitle = '¿Estás seguro de cancelar evento?';
    this.modalMessage = '¿Estás seguro de cancelar el evento?';
    this.isCancelAction = true;
    this.showButtons = true;
  }
  onModifyEvent() {
    this.showModal = true;
    this.modalTitle = '¿Está conforme con los cambios?';
    this.modalMessage = '¿Desea revisar una vez más los cambios?';
    this.isCancelAction = false;
    this.showButtons = true;
  }
  handleConfirm() {
    this.showButtons = false;
    if (this.isCancelAction) {
      this.modalTitle = 'Evento cancelado';
      this.modalMessage = '✔ El evento ha sido cancelado.';
    } else {
      this.modalTitle = 'Cambios guardados';
      this.modalMessage = '✔ Los cambios han sido guardados exitosamente.';
    }
    setTimeout(() => {
      this.showModal = false;
    }, 2000); // Cerrar el modal automáticamente después de 2 segundos
  }
  handleCancel() {
    // Cambia el mensaje a "Cambios guardados" y oculta los botones
    this.showButtons = false;
    this.modalTitle = 'Cambios guardados';
    this.modalMessage = '✔ Los cambios han sido guardados exitosamente.';
    setTimeout(() => {
      this.showModal = false;
    }, 2000); // Cerrar el modal automáticamente después de 2 segundos
  }

}

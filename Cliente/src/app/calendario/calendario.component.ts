import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid'; // Importa el plugin

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],  // Agrega el plugin aquí
    initialView: 'timeGridWeek', // Usa la vista de semana
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay' // Permite cambiar entre vistas
    },
    events: [
      { title: 'Evento 1', start: '2023-11-20T10:00:00', end: '2023-11-20T12:00:00', color: '#D1C4E9' },
      { title: 'Evento 2', start: '2023-11-21T14:00:00', end: '2023-11-21T15:30:00', color: '#B3E5FC' },
      { title: 'Evento 3', start: '2023-11-22T09:00:00', end: '2023-11-22T11:00:00', color: '#FFCCBC' },
      { title: 'Evento 4', start: '2023-11-23T13:00:00', end: '2023-11-23T14:00:00', color: '#FFAB91' },
      { title: 'Evento 5', start: '2023-11-24T08:00:00', end: '2023-11-24T09:30:00', color: '#C5E1A5' },
      // Agrega más eventos si es necesario
    ],
    slotMinTime: '08:00:00',
    slotMaxTime: '18:00:00',
    allDaySlot: false,
    eventClick: this.handleEventClick.bind(this),
  };

  handleEventClick(arg: any) {
    alert('Evento: ' + arg.event.title);
  }
}

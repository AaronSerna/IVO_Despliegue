import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from 'fullcalendar';
import { ServicioPedirCitaService } from '../../../../services/servicio-pedir-cita/servicio-pedir-cita.service';
import { CitasService } from '../../../../services/servicio-citas/citas.service';

@Component({
  selector: 'app-componente-pedir-cita-paso-tres',
  templateUrl: './componente-pedir-cita-paso-tres.component.html',
  styleUrls: ['./componente-pedir-cita-paso-tres.component.css'],
})

export class ComponentePedirCitaPasoTresComponent implements OnInit {
  citaSeleccionada: string = '';
  agendaMedico: any = '';
  idMedico: string = '';
  fechaSeleccionadaBoolean: boolean = false;

  arrayCitasDisponibles: any = [];

  constructor(
    private pedirCitaService: ServicioPedirCitaService,
    private citasService: CitasService,
    private router: Router,
  ) { }



  ngOnInit() {

    this.idMedico = this.pedirCitaService.medicoSeleccionado;
    this.comprobarCitasDisponibles(this.idMedico);
    this.cargarCalendarioCitas();
  }

  cargarCalendarioCitas() {
    let fechaSeleccionada: string = '';
    let diasConAgendaGenerada: any = []; // Mantenemos un registro de los días para los que ya se ha generado la agenda
    let eventoSeleccionado: any; // Mantener una referencia al evento previamente seleccionado

    this.agendaMedico = this.pedirCitaService.agendaMedico;
    let agenda = this.agendaMedico;
    let eventos: any = []; // Almacenaremos los eventos de las horas disponibles en este array.
    let diasLibres = agenda?.diasLibres;
    let eventosDiasLibres: any = [];
    let eventosDiasFestivos: any = []


    // --------- CODIGO PARA SACAR LOS INTERVALOS DE DIAS LIBRES ----------

    for (let index = 0; index < diasLibres.length; index++) {
      let split = diasLibres[index].split(' - ');
      let startDate = new Date(split[0].trim());
      let endDate = new Date(split[1].trim());

      // Calcular la diferencia en milisegundos
      let diferenciaEnMilisegundos = endDate.getTime() - startDate.getTime();

      // Convertir la diferencia en milisegundos a días
      let diferenciaDeDias = Math.round(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
      let dateEvento = startDate;

      for (let index = 0; index <= diferenciaDeDias; index++) {
        let month = (dateEvento.getMonth() + 1).toString().padStart(2, '0');
        let day = dateEvento.getDate().toString().padStart(2, '0');
        let year = dateEvento.getFullYear();
        let nombreEvento = year + '-' + month + '-' + day;

        eventosDiasLibres.push(nombreEvento);
        dateEvento.setDate(dateEvento.getDate() + 1);
      }
    }

    let calendarEl = document.getElementById('calendar')!;
    let calendar = new Calendar(calendarEl, {

      initialView: 'dayGridMonth',
      locale: 'es', // Establece el idioma español
      firstDay: 1, // Define el primer día de la semana como lunes. (Si fuera 0 sería en domingo)
      timeZone: 'Europe/Madrid',
      slotMinTime: '07:00',
      slotMaxTime: '20:00',
      allDayText: 'Horas', // El texto de la columna izquierda al pinchar en un día.
      buttonText: {
        month: 'Vista de mes',
      },
      expandRows: true,
      contentHeight: 'auto',
      headerToolbar: { // Posición de los botones del fullcalendar.
        start: 'title',
        end: 'dayGridMonth prev,next',
      },

      viewDidMount: function () { // Deshabilitar el botón "month" en la vista de timeGridMonth

        let view = calendar.view;
        if (view.type === 'dayGridMonth') {
          let monthButtons = document.getElementsByClassName('fc-dayGridMonth-button');
          for (let i = 0; i < monthButtons.length; i++) {
            monthButtons[i].classList.add('d-none'); // Le añadimos la clase 'display: none' a todos los elementos fc-datGridMonth.
          }
        }
      },

      eventDidMount: function (info) { // Ocultamos los eventos en la vista mensual.

        let view = calendar.view;
        if (view.type === 'dayGridMonth') {
          info.el.style.display = 'none';
        }
      },

      dateClick: (info) => {

        let diaActual = new Date();
        eventos = []; // Limpiamos el array de eventos para que no se almacenen eventos de varios días en el primer día pinchado.
        diaActual.setHours(0); // Lo establecemos en 0 para que la hora actual sea siempre inferior a 01:00:00.
        let date = new Date(info.dateStr);
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // MM -> 04
        let day = date.getDate().toString().padStart(2, '0'); // DD -> 01
        let diaSeleccionado = year + '-' + month + '-' + day;
        let eventoSinCitaYaCreado = false; // Esta variable controlará que no se vuelva a crear el evento 'sin citas' del else if, ya que al pinchar por segunda vez en un dái con esta condición se volvía a crear otro evento.


        // CODIGO PARA ALMACENAR LOS DIAS FESTIVOS:

        let fechaSoloMesDia = month + '-' + day; // Almacenamos en la variable el mes y dia ('MM-DD') para compararlo con los días festivos.

        for (let i = 0; i < agenda.diasFestivos.length; i++) {
          eventosDiasFestivos.push(agenda.diasFestivos[i]);
        }
        /* PODEMOS O BIEN HACER UN FOR PARA ALMACENAR EN EL ARRAY 'eventosDiasFestivos' el valor de los días de la agenda, o bien en el if de
        abajo usar directamente !agenda.diasFestivos.includes(fechaSoloMesDia). Es lo mismo
        */

        let nombreDia = date.toLocaleDateString('es-ES', { weekday: 'long' });
        let citasDiaSeleccionado = [];

        if (agenda.hasOwnProperty(nombreDia) && date > diaActual) { // Si el día de la agenda coincide con el nombre del día pinchado...

          if (!diasConAgendaGenerada.includes(diaSeleccionado) && !eventosDiasLibres.includes(diaSeleccionado) && !eventosDiasFestivos.includes(fechaSoloMesDia)) {  // Verificamos si la agenda para este día ya ha sido generada previamente
            // if (!diasConAgendaGenerada.includes(diaSeleccionado) && !eventosDiasLibres.includes(diaSeleccionado) && !agenda.diasFestivos.includes(fechaSoloMesDia)) {

            let intervaloHora = agenda[nombreDia]; // El intervalo son de 10 minutos por cita.
            let repeticionIntervalos = 1;

            if (Array.isArray(intervaloHora)) {
              repeticionIntervalos = intervaloHora.length; // Generaremos los eventos/citas con un intervalo de 10'.
            }

            if (this.arrayCitasDisponibles.hasOwnProperty(diaSeleccionado)) {
              citasDiaSeleccionado = this.arrayCitasDisponibles[diaSeleccionado];
            }

            for (let index = 1; index <= repeticionIntervalos; index++) {

              let partes = intervaloHora.split('-'); //(2) ['08:00', '17:00']
              let horaInicio = parseInt(partes[0], 10); // "8"
              let horaFin = parseInt(partes[1], 10); // "15"

              for (let i = (horaInicio + 2) * 60; i <= (horaFin + 1.9) * 60; i += agenda?.duracionCita) {  // Ponemos 1.9 en lugar de 1 porque no deberían generarse citas a las 17h, ya que es la hora de fin de jornada del médico.

                // Calcular la hora y los minutos para el evento
                let hora = Math.floor(i / 60);
                let minutos = i % 60;
                let citaHora = '';
                let citaCogida = false;

                for (let index = 0; index < citasDiaSeleccionado.length; index++) {
                  citaHora = (hora).toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0');

                  if (citasDiaSeleccionado[index] === citaHora) {
                    citaCogida = true;
                    break;
                  }
                }

                // Crear la fecha del evento
                let fechaEvento = new Date(info.dateStr);
                fechaEvento.setHours(hora);
                fechaEvento.setMinutes(minutos);

                // Almacenamos la fecha pinchada para almacenarla en el servicio de la cita.
                fechaSeleccionada = info.dateStr;
                this.pedirCitaService.fechaSeleccionada = fechaSeleccionada;

                // Crear el evento con la hora y los minutos calculados
                let event = {
                  title: '',
                  start: fechaEvento, // Utilizamos la fecha y la hora del evento
                  classNames: [citaCogida ? 'citaCogida' : ''], // Si la cita no está disponible, se pintará de rojo.
                };

                eventos.push(event); // Añadimos los eventos al array.
              }
            }
            calendar.addEventSource({ events: eventos });
            // Una vez que la agenda se ha generado para este día, agregamos el día al servicio.
            diasConAgendaGenerada.push(diaSeleccionado);

          } else if (eventosDiasFestivos.includes(fechaSoloMesDia) || eventosDiasLibres.includes(diaSeleccionado)) {

            if (!eventoSinCitaYaCreado) { // Si el evento 'sin cita' ya ha sido creado, no se vuelve a crear para el mismo día.

              let fechaInicio = new Date(info.dateStr + 'T13:00:00'); // Inicio del día seleccionado
              let fechaFin = new Date(info.dateStr + 'T19:00:00'); // Fin del día seleccionado

              let eventSinCitas = {
                title: 'No hay citas disponibles para este día.',
                start: fechaInicio, // No puede ser de tipo string, debe ser Date.
                end: fechaFin, // No puede ser de tipo string, debe ser Date.
                display: 'background',
                backgroundColor: '#ffa2a2',
                classNames: ['sinCita'],
              };
              eventoSinCitaYaCreado = true;
              calendar.addEvent(eventSinCitas); // Añadimos el evento al calendario
            }
          }
        }

        calendar.updateSize();
        calendar.changeView('timeGridDay', info.dateStr);

        this.mostrarOcultarButtons('fc-prev-button', 'none');
        this.mostrarOcultarButtons('fc-next-button', 'none');
      },

      // Evento click para almacenar la hora de la cita deseada.
      eventClick: (event) => {

        if (event.event.start) {
          if (eventoSeleccionado) {
            eventoSeleccionado.el.style.backgroundColor = ''; // Al seleccionar otro evento, reiniciamos el color del evento pinchado anteriormente al original.
          }

          if (!event.el.classList.contains('citaCogida')) {
            event.el.style.backgroundColor = '#1CB622';
            event.el.style.border = '#1CB622';
            event.el.style.color = 'white';
            eventoSeleccionado = event;

            // Obtener la hora local y restar una hora manualmente
            let horaLocal = new Date(event.event.start);
            horaLocal.setHours(horaLocal.getHours() - 2); // Debido a un problema al guardar la hora, restamos 2, debido al cambio horario. Anteriormente, si seleccionabamos las 08:00 almacenaba las 09:00.

            let horaSeleccionada = horaLocal.toLocaleTimeString('es-ES', {
              hour: '2-digit',
              minute: '2-digit',
            });

            this.pedirCitaService.horaSeleccionada = horaSeleccionada;
            this.fechaSeleccionadaBoolean = true; // Si se ha seleccionado una cita, habilitamos el botón 'Continuar' del HTML.
          } else {
            this.pedirCitaService.horaSeleccionada = '';
          }
        }
      },
    });


    this.restringirNavegacionCalendario(calendar); // Renderizamos el calendario solamente 6 meses, de esta forma nos aseguramos que no se pueda pedir cita en meses posteriores a 6 o incluso años.

    // En la vista diaria, ocultamos los botones '<' y '>':

    let elementos = document.getElementsByClassName('fc-dayGridMonth-button');

    for (let i = 0; i < elementos.length; i++) {
      elementos[i].addEventListener('click', () => {
        this.mostrarOcultarButtons('fc-prev-button', 'block');
        this.mostrarOcultarButtons('fc-next-button', 'block');
      }, false);
    }
  }

  restringirNavegacionCalendario(calendar: Calendar) {
    let fechaActual = new Date(); // Obtener la fecha actual
    let seisMesesDespues = new Date();
    seisMesesDespues.setMonth(fechaActual.getMonth() + 6); // Obtener la fecha seis meses después

    calendar.setOption('validRange', { start: fechaActual, end: seisMesesDespues });
    calendar.render(); // Renderizamos el fullcalendar.
  }

  mostrarOcultarButtons(clase: string, propiedad: string) {
    let button = Array.from(document.getElementsByClassName(clase) as HTMLCollectionOf<HTMLElement>);

    for (let i = 0; i < button.length; i++) {
      button[i].style.display = propiedad;
    }
  }

  comprobarCitasDisponibles(idMedico: string) {
    this.citasService
      .comprobarCitasDisponibles(idMedico)
      .subscribe((response) => {
        this.arrayCitasDisponibles = response;
      });
  }

  guardarDatosPaso3() {
    this.pedirCitaService.citaSeleccionada = this.citaSeleccionada;
  }

  continuarAlPaso4() {
    this.guardarDatosPaso3();
    this.router.navigate(['/paciente/pedirCita/pedirCitaPaso4']);
  }

}

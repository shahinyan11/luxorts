import * as dates from 'react-big-calendar/lib/utils/dates';
import { DateLocalizer } from 'react-big-calendar/lib/localizer';

export const dateRangeFormat = ({ start, end }, culture, local) =>
  `${local.format(start, 'D', culture)} — ${local.format(end, 'D', culture)}`;

export const timeRangeFormat = ({ start, end }, culture, local) =>
  `${local.format(start, 't', culture)} — ${local.format(end, 't', culture)}`.toLowerCase();

export const timeRangeStartFormat = ({ start }, culture, local) =>
  `${local.format(start, 't', culture)} — `;

export const timeRangeEndFormat = ({ end }, culture, local) =>
  ` — ${local.format(end, 't', culture)}`;

export const weekRangeFormat = ({ start, end }, culture, local) =>
  `${local.format(start, 'MMMM dd', culture)} - ${local.format(
    end,
    dates.eq(start, end, 'month') ? 'dd' : 'MMMM dd',
    culture,
  )}`;

export const formats = {
  dateFormat: 'dd',
  dayFormat: 'dd EEE',
  weekdayFormat: 'ccc',

  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,

  timeGutterFormat: 't',

  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'cccc, MMM dd',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,

  agendaDateFormat: 'EEE MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat,
};

const luxonLocalizer = (DateTime, { firstDayOfWeek = 1 } = {}) => {
  const locale = (m, c) => (c ? m.reconfigure(c) : m);

  return new DateLocalizer({
    formats,
    firstOfWeek() {
      return firstDayOfWeek;
    },

    format(value, format, culture) {
      return locale(DateTime.fromJSDate(value), culture).toFormat(format);
    },
  });
};
export default luxonLocalizer;

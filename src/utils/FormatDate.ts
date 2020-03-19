import { format as dateFormat, parseISO } from 'date-fns';

export function formatDateWithDate(date: string) {
  return dateFormat(parseISO(date), "dd/MM/yyyy 'as' hh:mm:ss");
}

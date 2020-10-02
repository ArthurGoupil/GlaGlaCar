export const getSimplifiedDate = (date: Date, separator: string): string => {
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  if (day.length === 1) day = '0' + day;
  if (month.length === 1) month = '0' + month;
  const simplifiedDate =
    month + separator + day + separator + date.getFullYear();

  return simplifiedDate;
};

export const getDateWithDaysOffset = (date: Date, daysOffset: number): Date => {
  return new Date(date.setDate(date.getDate() + daysOffset));
};

export const getDateDisplay = (date: Date): string => {
  const isToday = (date: Date, daysOffset?: number): boolean => {
    let referenceDay = new Date();
    if (daysOffset)
      referenceDay = getDateWithDaysOffset(referenceDay, daysOffset);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayOfToday = referenceDay.getDate();
    const monthOfToday = referenceDay.getMonth();
    const yearOfToday = referenceDay.getFullYear();

    return day === dayOfToday && month === monthOfToday && year === yearOfToday;
  };

  if (isToday(date)) return 'Today';
  else if (isToday(date, 1)) return 'Tomorrow';
  else return getSimplifiedDate(date, '/');
};

export const capitalizeString = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

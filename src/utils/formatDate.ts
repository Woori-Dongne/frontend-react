export const changeDateString = (date: string) => {
  const newDate = new Date(date);

  const year = newDate.getFullYear().toString().slice(-2);
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');
  const hour = String(newDate.getHours()).padStart(2, '0');
  const minute = String(newDate.getMinutes()).padStart(2, '0');

  return `${year}.${month}.${day} ${hour}:${minute}`;
};

export const makeNewDate = (
  year: string | number,
  month: string | number,
  day: string | number,
  hour: string | number,
  minute: string | number,
) => {
  const standardHour = Number(hour) + 9;
  const changeKoreaHour = standardHour >= 24 ? standardHour - 24 : standardHour;

  return `${year}.${month}.${day} ${changeKoreaHour}:${minute}`;
};

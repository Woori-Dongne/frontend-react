export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const year = newDate.getFullYear().toString().slice(-2);
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');
  const hour = String(newDate.getHours()).padStart(2, '0');
  const minute = String(newDate.getMinutes()).padStart(2, '0');

  return `${year}.${month}.${day} ${hour}:${minute}`;
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const ReadableDate = dateString => {
  const date = new Date(dateString);
  return `${date.getDate()} ${months[date.getMonth()]}`;
}

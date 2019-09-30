export default function getLastUpdatedTime(dateStr) {
  const dateObj = new Date(dateStr);
  const currentDate = new Date();
  const dateDiff = currentDate - dateObj;
  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const yearsAgo = currentDate.getFullYear() - dateObj.getFullYear();
  const monthsAgo = currentDate.getMonth() - dateObj.getMonth();
  const daysAgo = dateDiff / oneDay;
  const hoursAgo = dateDiff / oneHour;
  const minutesAgo = dateDiff / oneMinute;

  if (yearsAgo) return `${yearsAgo} years ago`;
  if (monthsAgo) return `${monthsAgo} months ago`;
  if (Math.trunc(daysAgo)) return `${Math.trunc(daysAgo)} days ago`;
  if (Math.trunc(hoursAgo)) return `${Math.trunc(hoursAgo)} hours ago`;
  if (Math.trunc(minutesAgo)) return `${Math.trunc(minutesAgo)} minutes ago`;
  return 'Recently';
}

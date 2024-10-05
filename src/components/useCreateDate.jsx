const useCreateDate = () => {
  const dateObj = new Date();
  const month = dateObj.getMonth();
  let monthName;
  // eslint-disable-next-line default-case
  switch (month) {
    case 0:
      monthName = "jan";
      break;
    case 1:
      monthName = "feb";
      break;
    case 2:
      monthName = "mars";
      break;
    case 3:
      monthName = "apr";
      break;
    case 4:
      monthName = "mai";
      break;
    case 5:
      monthName = "juin";
      break;
    case 6:
      monthName = "jui";
      break;
    case 7:
      monthName = "aou";
      break;
    case 8:
      monthName = "sep";
      break;
    case 9:
      monthName = "oct";
      break;
    case 10:
      monthName = "nov";
      break;
    case 11:
      monthName = "dec";
      break;
  }

  const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
  return date;
};
export default useCreateDate;

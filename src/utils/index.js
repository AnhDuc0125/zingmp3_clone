const getDate = (unix_timestamp) => {
  const date = new Date(unix_timestamp * 1000);

  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedDate = dd + '/' + mm + '/' + yyyy;

  return formattedDate;
};

const getCompactNum = (number) => {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
  });
  const compactedNum = formatter.format(number);

  return compactedNum;
};

export { getDate, getCompactNum };

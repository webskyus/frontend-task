const dateFormatter = (date: string) => {
  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(parsedDate);
};

export default dateFormatter;

const formatter = new Intl.NumberFormat('ru-RU', {
  currency: 'RUB',
  style: 'currency',
});

export const currency = (value) => {
  return formatter.format(value);
};

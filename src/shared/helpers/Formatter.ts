export function currencyFormatter(price: number): string {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',}).format(price);
};

export function percentageFormatter(percentage: number): string {
  return `${percentage > 0 ? '+' : ''}${Number(percentage).toFixed(2)}%`;
};

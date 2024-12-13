export const getDateRange = (range: string): Date[] => {
  const end = new Date();
  const start = new Date();

  switch (range) {
    case '6months':
      start.setMonth(end.getMonth() - 6);
      break;
    case '1year':
      start.setFullYear(end.getFullYear() - 1);
      break;
    case '2years':
      start.setFullYear(end.getFullYear() - 2);
      break;
    default:
      start.setMonth(end.getMonth() - 1);
  }

  return [start, end];
};

export const generateDateLabels = (start: Date, end: Date, interval: 'month' | 'quarter' | 'year'): string[] => {
  const labels: string[] = [];
  const current = new Date(start);

  while (current <= end) {
    labels.push(new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: interval === 'year' ? 'numeric' : undefined
    }).format(current));

    switch (interval) {
      case 'month':
        current.setMonth(current.getMonth() + 1);
        break;
      case 'quarter':
        current.setMonth(current.getMonth() + 3);
        break;
      case 'year':
        current.setFullYear(current.getFullYear() + 1);
        break;
    }
  }

  return labels;
};
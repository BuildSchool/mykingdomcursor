export const timeRanges = {
  revenue: [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' }
  ],
  occupancy: [
    { value: '6months', label: 'Last 6 Months' },
    { value: '1year', label: 'Last Year' },
    { value: '2years', label: 'Last 2 Years' }
  ]
} as const;

export const rangeMultipliers = {
  revenue: {
    monthly: 1,
    quarterly: 1.2,
    yearly: 1.5
  },
  occupancy: {
    '6months': 1,
    '1year': 0.98,
    '2years': 0.95
  }
} as const;
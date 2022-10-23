interface Investment {
  name: string;
  invested: number;
  losses: number;
  annualDividendForecast: number;
  dividendsReceived: number;
  taxPaid: number;
  netIncome: number;
}

export const investments: Investment[] = [
  {
    name: 'Vanguard All-World High Dividend Yield[VHYL]',
    invested: 0,
    losses: 0,
    annualDividendForecast: 0,
    dividendsReceived: 0,
    taxPaid: 0,
    netIncome: 0,
  },
  {
    name: 'Crypto Medium Yield/Risk', // Project79, YieldNodes
    invested: 0,
    losses: 0,
    annualDividendForecast: 0,
    dividendsReceived: 0,
    taxPaid: 0,
    netIncome: 0,
  },
  {
    name: 'Crypto High Yield/Risk', // StableFund
    invested: 0,
    losses: 0,
    annualDividendForecast: 0,
    dividendsReceived: 0,
    taxPaid: 0,
    netIncome: 0,
  }
];

export const investmentSummary: Investment = {
  name: '', // StableFund
  invested: 0,
  losses: 0,
  annualDividendForecast: 0,
  dividendsReceived: 0,
  taxPaid: 0,
  netIncome: 0,
}

investments.forEach((investment: Investment) => {
  investmentSummary.name = investmentSummary.name + investment.name
  investmentSummary.invested = investmentSummary.invested + investment.invested
  investmentSummary.losses = investmentSummary.losses + investment.losses
  investmentSummary.annualDividendForecast = investmentSummary.annualDividendForecast + investment.annualDividendForecast
  investmentSummary.dividendsReceived = investmentSummary.dividendsReceived + investment.dividendsReceived
  investmentSummary.taxPaid = investmentSummary.taxPaid + investment.taxPaid
  investmentSummary.netIncome = investmentSummary.netIncome + investment.netIncome
})

export default investments

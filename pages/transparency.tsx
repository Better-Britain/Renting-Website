import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import pound from '../functions/formatting/pound'
import percent from '../functions/formatting/percent'

const fundsRaised = 0;

const investments = [
  {
    name: 'Vanguard All-World High Dividend Yield[VHYL]',
    invested: 0,
    annualDividendForecast: 0,
    dividendsReceived: 0,
    taxPaid: 0,
    netIncome: 0,
  },
  {
    name: 'Crypto Medium Yield/Risk',
    invested: 0,
    annualDividendForecast: 0,
    dividendsReceived: 0,
    taxPaid: 0,
    netIncome: 0,
  },
  {
    name: 'Crypto High Yield/Risk',
    invested: 0,
    annualDividendForecast: 0,
    dividendsReceived: 0,
    taxPaid: 0,
    netIncome: 0,
  }
]

const assets = [
  {
    area: 'Sunderland',
    properties: 0,
    agents: ['Gentoo'],
    purchaseValue: 0,
    monthlyRentIncome: 0,
    annualYield: 0,
  },
  {
    area: 'Newcastle-Upon-Tyne',
    properties: 0,
    agents: [],
    purchaseValue: 0,
    monthlyRentIncome: 0,
    annualYield: 0,
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Better British Renting Ltd | Transparency Report</title>
        <meta name="description" content="Improving the rental housing market across the UK." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className='p-16'>
          <h1 className='text-2xl'>
            Transparency Report
          </h1>
        </section>

        <section className='p-16'>
          <h1 className='text-xl mb-4'>Funds Raised</h1>
          <span className='text-8xl'>{pound(fundsRaised)}</span>
        </section>

        <section className='p-16'>
          <h1 className='text-xl mb-4'>Investments</h1>
          <table className='striped rounded'>
            <thead>
              <tr>
                <th>Platform / Investment</th>
                <th>Amount Invested</th>
                <th>Annual Dividends Forecast</th>
                <th>Dividends Received</th>
                <th>Tax Paid</th>
                <th>Net Income Earned</th>
              </tr>
            </thead>
            <tbody>
              {
                investments.map(investment => (
                  <tr key={investment.name}>
                    <td>{investment.name}</td>
                    <td>{pound(investment.invested)}</td>
                    <td>{pound(investment.annualDividendForecast)}</td>
                    <td>{pound(investment.dividendsReceived)}</td>
                    <td>{pound(investment.taxPaid)}</td>
                    <td>{pound(investment.netIncome)}</td>
                  </tr>
                ))
              }
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </section>

        <section className='p-16'>
          <h1 className='text-xl mb-4'>Assets</h1>
          No assets currently held
          <table className='striped rounded'>
            <thead>
              <tr>
                <th>Area</th>
                <th>Number of Properties</th>
                <th>Agents</th>
                <th>Purchase Value</th>
                <th>Monthly Rent Income</th>
                <th>Annual Yield</th>
              </tr>
            </thead>
            <tbody>
              {
                assets.map(asset => (
                  <tr key={asset.area}>
                    <td>{asset.area}</td>
                    <td>{asset.properties}</td>
                    <td>{asset.agents.join(', ')}</td>
                    <td>{pound(asset.purchaseValue)}</td>
                    <td>{pound(asset.monthlyRentIncome)}</td>
                    <td>{percent(asset.annualYield)}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default Home

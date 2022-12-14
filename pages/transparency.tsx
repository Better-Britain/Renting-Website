import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import pound from '../functions/formatting/pound'
import percent from '../functions/formatting/percent'
import { areaSummary, areaSummaryTotals } from '../data/assets'
import { investments, investmentSummary } from '../data/investments'

const fundsRaised = 0;

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
                <th>Losses</th>
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
                    <td>{pound(investment.losses)}</td>
                    <td>{pound(investment.netIncome)}</td>
                  </tr>
                ))
              }
            </tbody>
            <tfoot>
              <tr>
                <td>Totals:</td>
                <td>{pound(investmentSummary.invested)}</td>
                <td>{pound(investmentSummary.annualDividendForecast)}</td>
                <td>{pound(investmentSummary.dividendsReceived)}</td>
                <td>{pound(investmentSummary.taxPaid)}</td>
                <td>{pound(investmentSummary.losses)}</td>
                <td>{pound(investmentSummary.netIncome)}</td>
              </tr>
            </tfoot>
          </table>
        </section>

        <section className='p-16'>
          <h1 className='text-xl mb-4'>Properties</h1>
          No properties currently owned
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
                areaSummary.map(area => (
                  <tr key={area.name}>
                    <td>{area.name}</td>
                    <td>{area.properties}</td>
                    <td>{area.agents.join(', ')}</td>
                    <td>{pound(area.purchaseValue)}</td>
                    <td>{pound(area.monthlyRentalIncome)}</td>
                    <td>{percent(((area.monthlyRentalIncome * 12) / area.purchaseValue) * 100)}</td>
                  </tr>
                ))
              }
            </tbody>
            <tfoot>
              <tr>
                <td>Totals:</td>
                <td>{areaSummaryTotals.properties}</td>
                <td>-</td>
                <td>{pound(areaSummaryTotals.purchaseValue)}</td>
                <td>{pound(areaSummaryTotals.monthlyRentalIncome)}</td>
                <td>{percent(((areaSummaryTotals.monthlyRentalIncome * 12) / areaSummaryTotals.purchaseValue) * 100)}</td>
              </tr>
            </tfoot>
          </table>
        </section>
      </main>
    </div>
  )
}

export default Home

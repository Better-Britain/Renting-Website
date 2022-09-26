import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

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
          <h1 className='text-xl'>Funds Raised</h1>
          £0
        </section>

        <section className='p-16'>
          <h1 className='text-xl'>Investments</h1>
          <table className='striped'>
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
                    <td>£{investment.invested}</td>
                    <td>£{investment.annualDividendForecast}</td>
                    <td>£{investment.dividendsReceived}</td>
                    <td>£{investment.taxPaid}</td>
                    <td>£{investment.netIncome}</td>
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
          <h1 className='text-xl'>Assets</h1>
        </section>
      </main>
    </div>
  )
}

export default Home

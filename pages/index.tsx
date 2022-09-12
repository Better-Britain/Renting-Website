import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const IntroSection = ({ color, children, heading }: any) => {
  let colorClass = ''
  if (color === 'red') { colorClass = 'bg-red-uk text-white-uk' }
  if (color === 'blue') { colorClass = 'bg-blue-uk text-white-uk' }
  return (
    <section className={`p-16 ${colorClass}`}>
      <h1 className='text-2xl mb-6'>{heading}</h1>
      {children}
    </section>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Better British Renting Ltd</title>
        <meta name="description" content="Improving the rental housing market across the UK." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className='p-16'>
          <h1 className='text-2xl'>
            A private not-for-profit business aimed at improving quality of lives for private rental tenants throughout the UK.
          </h1>
        </section>

        <IntroSection heading='Mission Statement'>
          <p className='mb-2'>Our mission is to provide opportunities for fair affordable rental properties to many renters across Britain, currently there are not enough homes to cover this scenario and we want to change this.</p>
          <p>We will buy homes at market rates, and then rent them to tenants using social housing providers, this increases the overall wealth of poorer individuals as less people will be forced to pay higher prices of private landlords.</p>
        </IntroSection>

        <IntroSection color='red' heading='Why?'>
          <p className='mb-2'>I feel that the situation in the UK with regards to the rental and housing market provides an unequal and unfair system whereby the poorest households can only just afford to live due to the expensive prices they are forced to pay to private landlords due to the lack of availability of social housing.</p>
          <p className='mb-2'>The landlords themselves are not to blame either as due to the prices of housing, in order to make a good living high rent must be charged to get a decent return on investment.</p>
          <p>By buying homes and renting cheaper this provides tenants a lot of help financially and may also allow them to save up enough to get on the property ladder themselves in time, or at least not be struggling just to survive.</p>
        </IntroSection>

        <IntroSection heading='Proposal'>
          <p className='mb-2'>By investing in a mixture of Index Funds and Cryptocurrency projects we can achieve high sustainable returns on initial investor capital, this capital will remain invested in perpetuity to ensure a long term stable income to the business, this income will then be used to purchase new properties from the market, the rent paid from tenants will be used to maintain and improve properties.</p>
          <p className='mb-2'>The business will hire one director who will be paid a reasonable but not excessive salary which will increase in line with inflation over time.</p>
          <p className='mb-2'>We will reach out to multiple high net worth individuals and foundations to try and raise initial capital which will be invested into reliable income generating funds.</p>
          <p>We will outsource the day-to-day management and maintenance of the homes to the appropriate social housing scheme provider (eg, Gentoo)</p>
        </IntroSection>

        <IntroSection color='blue' heading='Business Example'>
          <p className='mb-2'>We reach out to 10 foundations to raise capital, 3 respond and pledge £200,000 each, this is an initial raise of £600,000.</p>
          <p className='mb-2'>We invest 70% of this (£420,000) into VHYL index fund which at the time of writing provides a 3.95% dividend (£16,590/year), this will be used in part to pay directors salary and accountancy fees.</p>
          <p className='mb-2'>The remaining 30% (£180,000) will be invested in our partner Crypto project which is targeting a 4-7% monthly return (4%=£7,200/mo - 7%=£12,600) - this money will be compounded until such time that it is enough to buy a decent condition house in the market, let&apos;s say around £80,000 (80000/7200 = 11.1 months) - therefore every year we can buy an additional property and we will compound the twelfth month income to provide additional growth.</p>
          <p>As we gain more funds or if more investors donate or we are able to find homes at a cheaper initial cost we can add these additional funds to our investments to afford us the ability to bring down the annual timeline to either buy more houses or invest more for quicker buying.</p>
        </IntroSection>

        <IntroSection heading='Additional Ideas: Rent Equity'>
          <p className='mb-2'>In addition to providing tenants access to cheap housing, another idea of value could be to offer equity through renting, for example half of the rent the tenants pay could be used to build equity in their home, providing value to long term renters in a similar fashion to the old rent-to-buy schemes, once a tenant has amassed an equity value of 125-150% of the home the renter could be giving the option to buy the property using this fund, some people of course prefer the value of having someone else be responsible for the upkeep of the house etc, so maybe not everyone would use this option, but I think many would, by doing it based on 125-150% of the homes original purchase price we ensure the business is always able to afford the next house and to keep improving the quality of the housing market over time.</p>
          <p>Instead of purchasing the house, another option could be for tenants to receive a reduction in the cost of their rent once 125-150% equity is raised, effectively reducing their costs down to what is minimally required for the housing agent and any maintenance fees, thus providing further assistance with cost of living but still outsourcing the management of the property to their estate agent.</p>
        </IntroSection>
      </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Better British Renting Ltd | Contact Info</title>
        <meta name="description" content="Improving the rental housing market across the UK." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className='p-16'>
          <h1 className='text-2xl'>
            Contact
          </h1>
        </section>

        <section className='p-16'>
          <h1 className='text-xl mb-4'>Email</h1>
          <p>To get in touch email us at <a href='mailto:betterbritishrentingltd@gmail.com'>betterbritishrentingltd@gmail.com</a> we aim to reply to all emails within 5 business days</p>
        </section>
      </main>
    </div>
  )
}

export default Contact

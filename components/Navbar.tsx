import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar flex bg-blue-uk text-white-uk p-4 text-xl">
        <Link href='/'><a className='mr-8'>Better British Renting Limited</a></Link>
        <div>
          <Link href='/'><a className='mr-4'>Proposal</a></Link>
          <Link href='/transparency'><a className='mr-4'>Transparency</a></Link>
        </div>
    </nav>
  )
}

export default Navbar

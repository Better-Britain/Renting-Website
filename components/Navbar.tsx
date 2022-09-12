import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-uk text-white-uk p-4 text-2xl">
        <Link href='/'><a>Better British Renting Limited</a></Link>
    </nav>
  )
}

export default Navbar

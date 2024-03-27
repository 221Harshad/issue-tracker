import React from 'react'
import Link from 'next/link';
import { FaBug } from "react-icons/fa";
const NavBar = () => {
  const links = [
    {label:'DashBoard', href:"/"},
    {label:'Issues' , href:"/issues"}
  ]
  return (
    <nav className="flex space-x-6 border-b p-5 mb-5 h-14 items-center">
      <Link href="/"><FaBug /></Link>
      <ul className='flex space-x-6 '>
        {links.map((link)=>(
          <Link key={link.href} className='text-zinc-500 hover:text-zinc-800 transition-colors ' 
          href={link.href}>{link.label}</Link>
        ))}
       
      </ul>
    </nav>
  )
}

export default NavBar

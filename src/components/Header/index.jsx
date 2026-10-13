import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-24 flex items-center justify-between px-4 py-2 bg-gray-800 text-white'>
        <h2 className='text-3xl'>Logo</h2>
        <nav className='flex items-center gap-8'>
            <a className='text-xl' href="/">Home</a>
            <a className='text-xl' href="/all-notes">All Notes</a>
            <a className='text-xl' href="/about-us">About Us</a>
            <a className='text-xl' href="/blog">Blog</a>
            <a className='text-xl' href="/contact-us">Contact</a>
        </nav>
    </header>
  )
}

export default Header
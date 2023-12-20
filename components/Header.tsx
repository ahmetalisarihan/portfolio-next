import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between h-20 max-width border-b border-peach'>
        <Link href="/">
            <h5 className='text-purple text-xl font-semibold'>AAS</h5> </Link>
            <ul><li><Link href={"about"}>about</Link> </li></ul>
    </header>
  )
}

export default Header
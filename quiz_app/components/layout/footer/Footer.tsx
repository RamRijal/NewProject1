import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="mx-auto bg-gray-100 py-3 px-4 flex justify-between items-center">
                <p> &copy;2024 All right are reserved </p>
                <p>Made by <Link className='text-amber-500' href='/'>Ram Rijal</Link></p>
            </div>
        </>
    )
}

export default Footer
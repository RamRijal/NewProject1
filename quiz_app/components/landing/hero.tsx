'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
}
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const Hero = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    if (loading) {
        return <h1 className='flex justify-center items-center mt-72'>Loading....</h1>;
    }
    return (
        <>
            <div className="min-vh-100 flex flex-col justify-center items-center gap-8 mt-28 pt-12">
                <Image className='absolute -z-10 -left-20 top-10' alt='image1' height={700} width={700} src='/136881410_471fe6bf-1dc4-4281-9aa5-238e6445247d.svg' />

                <Image className='absolute right-4 top-20' alt='image1' height={500} width={500} src='/136881254_39eb0bae-46c4-44c7-bff3-0c3311dc0bbd.svg' />

                <h1 className='text-xl font-bold text-gray-700'>Choose your topic, play and learn</h1>
                <h1 className='text-6xl font-bold text-gray-700'>&quot;Test Your Tech Knowledge&quot;</h1>
                <p className='text-xl font-bold text-gray-700'>For your own self-improvement</p>
                <div className="">
                    <Link href='/login'>
                        <button className='bg-amber-300 hover:bg-yellow-500  text-gray-800 font-bold py-3 px-6 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg'>Get Started</button>
                    </Link>
                </div>
            </div>
        </>)
}

export default Hero
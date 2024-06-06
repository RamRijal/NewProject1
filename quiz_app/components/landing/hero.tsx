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
            <div className="h-screen bg-gradient-to-b from-slate-200 to-blue-300 flex flex-col justify-center items-center gap-8 ">
                <Image className='absolute z-10 -left-32 top-10' alt='image1' height={700} width={700} src='/136881410_471fe6bf-1dc4-4281-9aa5-238e6445247d.svg' />

                <Image className='absolute right-2 top-24' alt='image1' height={500} width={500} src='/136881254_39eb0bae-46c4-44c7-bff3-0c3311dc0bbd.svg' />
                <div className="z-40 flex flex-col justify-center items-center gap-7 my-16">
                    <h1 className='text-lg font-bold text-gray-700'>Choose your topic, play and learn</h1>
                    <h1 className='text-6xl font-bold text-gray-700'>&quot;Test Your Tech Knowledge&quot;</h1>
                    <p className='text-xl font-bold text-gray-700'>For your own self-improvement</p>
                    <div className="z-50">
                        <Link href='/login'>
                            <button className='bg-amber-300 hover:bg-yellow-500  text-gray-800 font-bold py-3 px-6 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg'>Get Started</button>
                        </Link>
                    </div>
                    <p className='text-lg font-semibold text-gray-700 mt-3'>Wanna know more about us?</p>

                    <div className="flex justify-center items-center gap-4">
                        <Link href='/'>
                            <Image alt='image1' height={35} width={35} src='/facebook-svgrepo-com.svg' />
                        </Link>
                        <Link href='/'>
                            <Image alt='image2' height={40} width={40} src='/instagram-svgrepo-com.svg' />
                        </Link>
                        <Link href='/'>
                            <Image alt='image3' height={32} width={32} src='/linkedin-round-svgrepo-com.svg' />
                        </Link>
                        <Link href='/'>
                            <Image alt='image4' height={30} width={30  } src='/github-142-svgrepo-com.svg' />
                        </Link>
                    </div >

                </div >
            </div >
        </>)
}

export default Hero
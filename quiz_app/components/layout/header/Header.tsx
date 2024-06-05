/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header>
                <div className="relative bg-black">
                    <div className="absolute inset-0">
                        <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>

                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between h-16 lg:h-20">
                            <div className="flex-shrink-0">
                                <Link href='/'>
                                    <p className='text-3xl text-white font-bold'>Teq<span className='text-amber-300'>Quiz</span></p>
                                </Link>
                            </div>

                            <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>

                            <div className="hidden lg:flex lg:justify-around lg:items-center lg:space-x-10">
                                <Link href="/" title="" className="text-base font-medium text-white hover:text-amber-300 hover:-translate-y-1 hover:transition-all"> Home </Link>

                                <Link href="/category" title="" className="text-base font-medium text-white hover:text-amber-300 hover:-translate-y-1 hover:transition-all">  Category</Link>

                                <Link href="/about" title="" className="text-base font-medium text-white hover:text-amber-300 hover:-translate-y-1 hover:transition-all"> About </Link>

                                <Link href="/contact" title="" className="text-base font-medium text-white hover:text-amber-300 hover:-translate-y-1 hover:transition-all"> Contact </Link>
                            </div>
                            <div className="flex gap-3">

                                <Link href="/register" title=""
                                    className="order-2 items-center justify-center hidden px-5 py-2 text-base font-semibold text-black transition-all duration-200 bg-yellow-300 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500 hover:scale-105" role="button">Sign up</Link>

                                <Link href="/login" title=""
                                    className="order-1 items-center justify-center hidden px-5 py-2 text-lg font-semibold text-yellow-300 transition-all duration-200 bg-none  lg:inline-flex hover:text-yellow-500 hover:scale-105" role="button">Login</Link>
                            </div>
                        </nav>
                    </div>
                </div>

                <nav className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden">
                    <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col flex-grow h-full">
                        <nav className="flex flex-col flex-1 mt-10 space-y-2">
                            <a href="#" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Home </a>

                            <a href="#" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Category </a>

                            <a href="#" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> About </a>

                            <a href="#" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Contact </a>
                        </nav>

                        <div className="flex flex-col items-start">
                            <a href="#" title="" className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-yellow-300 border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500" role="button">Join Now </a>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
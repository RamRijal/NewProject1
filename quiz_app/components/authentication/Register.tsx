'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Register = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return <h1 className='flex justify-center items-center mt-72'>Loading....</h1>;
  }
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Register</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Enter your credentials to proceed</p>
        </div>

        <div className="max-w-3xl mx-auto mt-12 sm:mt-16">
          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="flex flex-start text-2xl font-semibold text-center text-gray-500">Personal Details</h3>

              <form action="#" method="POST" className="mt-8">
                <div className="flex flex-col  gap-x-5 gap-y-4">

                  <div>
                    <div className="mt-2.5 relative">
                      <input type="text" name="" id="" placeholder="Username " className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 caret-amber-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mt-2.5 relative">
                      <input type="tel" name="" id="" placeholder="Email Address" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 caret-amber-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mt-2.5 relative">
                      <input type="tel" name="" id="" placeholder="Password" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 caret-amber-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mt-2.5 relative">
                      <input type="tel" name="" id="" placeholder="Confirm Password" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-yellow-400 caret-amber-400" />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <div className="mt-2.5 relative">
                      <textarea name="" id="" placeholder="Enter your message" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-yellow-400 caret-amber-400" ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-md focus:outline-none hover:bg-yellow-500 focus:bg-yellow-500">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-base font-medium text-center text-gray-500 pt-8">Already have an account? <Link href='/login' className='text-blue-500 '>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Register;
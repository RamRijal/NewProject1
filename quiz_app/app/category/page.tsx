'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Category = () => {
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

    const categories = [{
        name: 'Html',
        link: '/html',
        color: '#005A6D'
    },
    {
        name: 'Css',
        link: '/css',
        color: '#B700FB'
    },
    {
        name: 'Javascript',
        link: '/javascript',
        color: '#491C91'
    },
    {
        name: 'Tailwind',
        link: '/tailwind',
        color: '#F8AF00'
    },
    {
        name: 'React',
        link: '/react',
        color: '#61617A'
    },

    {
        name: 'Next',
        link: '/next',
        color: '#165C92'
    },

    {
        name: 'Typescript',
        link: '/typescript',
        color: '#6795FA'
    }
        ,
    {
        name: 'Git',
        link: '/git',
        color: '#F80300'
    }
        ,
    {
        name: 'Github',
        link: '/github',
        color: '#02BDC6'
    }
        ,
    {
        name: 'Node',
        link: '/node',
        color: '#7C00FB'
    }
        ,
    {
        name: 'Express',
        link: '/express',
        color: '#165C92'
    }
        ,
    {
        name: 'MongoDB',
        link: '/mongodb',
        color: '#59C7A0'
    }
        ,
    {
        name: 'Mongoose',
        link: '/mongoose',
        color: '#BD5683'
    }
        ,
    {
        name: 'Postman',
        link: '/postman',
        color: '#C3EB50'
    }

    ]
    return (
        <>
            <section className="py-4 bg-gradient-to-b from-blue-100 to-blue-400 sm:py-8 lg:py-8">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
                    <h1 className='text-center  my-16 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl'>Choose your Category</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-12 px-4 md:px-16 py-12 ">
                        {categories.map((item, index) => {
                            return (
                                <Link key='index' href={item.link}>
                                    <button style={{ backgroundColor: item.color }} color={item.color}
                                        className="h-20 md:h-24 w-full text-2xl font-semibold text-gray-900 rounded-lg shadow-lg">
                                        {item.name}
                                    </button>
                                </Link>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
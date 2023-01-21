import Image from 'next/image'
import React from 'react'
import spinner from '../public/spinner.gif'

const Spinner = () => {
    return (
        <div><Image src={spinner} className='w-[200px] m-auto block' alt="loading.."/></div>
    )
}

export default Spinner
import React from 'react'
import Image from 'next/image'

export default function Nav() {
    return (
        <div className="w-full h-20 bg-slate-200 flex flex-row justify-center items-center">
            <Image src="/logo.png" alt="logo" width={70} height={70}/>
            <div className=''>
                hello
            </div>
        </div>
    )
}
import React from 'react'
import Image from 'next/image'

export default function Nav() {
    return (
        <div className="w-full h-20 bg-slate-200 flex flex-row justify-center items-center gap-5">
            <Image src="/logo.png" alt="logo" width={70} height={70}/>
            <div className='w-[30%] font-semibold text-4xl text-emerald-400'>
                Pigasus
            </div>
            <div className="text-slate-400 text-xl hover:text-emerald-400 cursor-pointer duration-300 hover:-translate-y-1">
                Contact me
            </div>
        </div>
    )
}
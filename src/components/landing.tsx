import Image from 'next/image'


const imgList: string[] = []

export default function Landing() {

    const mapImages = () => {
        return imgList.map(i => <Image src={i} alt="img"/>)
    }

    return (
        <div className="w-full p-5 bg-slate-200 flex flex-row gap-20 justify-center items-center py-20">
            <Image src="/sculpting.svg" alt="hand" width="300" height="200"/>
            <div className="flex flex-col gap-5">
                <p className="text-7xl font-medium text-slate-700 -ml-4"><span className="text-7xl">👋</span> I'm Aaron!</p>
                <p className="text-xl text-slate-400 font-light w-[80%]">I make random stuff insert description here ya ya ya ay ayasyfeyf ayef</p>
                <div className="flex flex-row gap-5">
                    <button className='bg-slate-800 text-white w-5/12 px-4 py-3 text-xl duration-300 hover:bg-slate-600'>☕ Buy me a Coffee</button>
                    <button className="bg-emerald-400 px-4 py-3 w-5/12 h-16 text-xl text-white flex flex-row gap-3 items-center justify-center duration-300 hover:bg-emerald-300">
                        <p>Follow Me</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
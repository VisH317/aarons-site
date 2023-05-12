import Image from "next/image"


const imgList: string[] = []

export default function Imgs() {
    
    const mapImages = () => {
        return imgList.map(i => <Image src={i} alt="img"/>)
    }

    return (
        <div className="w-full flex-row flex-wrap">
            {mapImages()}
        </div>
    )
}
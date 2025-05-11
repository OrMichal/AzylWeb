import Image from "next/image";

interface props{
    width: number,
    height: number
}

export default function Logo({ width, height }: props){
    return(
        <Image src="../../../images/daisy-azyl-pos.png" alt="Logo" width={width} height={height} />
    );
}
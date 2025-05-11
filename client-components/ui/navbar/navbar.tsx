"use client"
import Image from "next/image";
import Logo from "../logo/logo";

interface props {
    children: React.ReactNode
};

export default function Navbar({ children }: props) {
    return (
        <nav className="bg-[#F8F6F2] px-4 py-4 shadow-md flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#3D3D3D]">Daisy azyl z.s.</span>
            </div>
            <ul className="flex gap-6 text-[#3D3D3D] font-medium">
                {children}
            </ul>
        </nav>
    );
}
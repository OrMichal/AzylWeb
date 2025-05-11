import Link from "next/link"

interface props {
    label: string,
    items: { label: string, href: string }[]
}

export default function HoverScrollItem({ label, items }: props) {
    return (
        <div className=" relative group ">
            <span className=" cursor-pointer hover:text-gray-300 ">
                {label}
            </span>

            <ul className="absolute top-full left-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-10">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
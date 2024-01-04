import Link from "next/link";

export default function LeftNav() {
    return (
        <nav className="bg-gray-800 p-4 text-white w-1/4">
            <ul>
                <li>
                    <Link href={"/dashboard"}>
                       Dashboard
                    </Link>
                </li>
                <li>
                    <Link href={"/stock"} className="hover:text-gray-300">
                       Stock
                    </Link>
                </li>
                <li>
                    <Link href="/" >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
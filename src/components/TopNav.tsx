import Link from "next/link";

export default function TopNav(){
    return (
        <nav className="fixed w-full h-48 shadow-xl bg-white">
            <div className="flex">
                <div>left side</div>
                <div>right side</div>
            </div>
        </nav>
    )
}
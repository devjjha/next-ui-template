import Image from "next/image";
import Logo from "../../public/next.svg"
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <nav className="fixed w-full h-20 shadow-xl bg-white">
                <div className="flex justify-self-start items-center h-full w- w-full px-4 2xl:px-16">
                    <Link href={"/"}>
                        <Image src={Logo}
                               alt={"Logo"}
                               width={205}
                               height={75}
                               className={"cursor-pointer"}
                               priority
                        />
                    </Link>
                    <div className={"flex-row shadow-2xl"}>
                        Left panel
                    </div>
                </div>
                <div>right side</div>
            </nav>
        </div>
    );
}
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/next.svg";
import {Divider} from "@nextui-org/react";

export default function LeftNav() {

    // @ts-ignore
    const NavItem = ({ href, children }) => {
        return (
            <li>
                <Link href={href}>
                    <span className="hover:text-gray-400">{children}</span>
                </Link>
            </li>
        );
    };

    return (
        <nav className="h-screen shadow-xl rounded-3xl p-4">
            <div className={"flex flex-col justify-start"}>
                <Link href="/">
                    <Image src={Logo}
                           alt={"Logo"}
                           width={205}
                           height={75}
                           className={"dark:invert cursor-pointer"}
                           priority
                    />
                </Link>
                <Divider className="my-4" />
                <ul className="space-y-2 mt-3">
                    <NavItem href="/dashboard">Dashboard</NavItem>
                    <NavItem href="/stock">Stocks</NavItem>
                    <NavItem href="/trade">Trades</NavItem>
                    <Divider className="my-4" />
                    <NavItem href="/admin">Admin</NavItem>
                </ul>
            </div>
            {/*<div className="space-y-2">*/}
            {/*    <ul>*/}
            {/*        <NavItem href="/messages">Messages</NavItem>*/}
            {/*        <NavItem href="/holiday-calendar">Holiday Calendar</NavItem>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </nav>
    );
}
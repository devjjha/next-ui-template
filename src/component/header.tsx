import TopNav from "@/component/TopNav";
import LeftNav from "@/component/LeftNav";

export default function Header() {
    return (
     <>
         <nav className="fixed w-full h-48 shadow-xl bg-white">
             <div className="flex">
                 <div>left side</div>
                 <div>right side</div>
             </div>
         </nav>
     </>
    );
}
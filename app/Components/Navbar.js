import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/pokeball.png"


export default function Navbar (){

    return(
      <nav className="flex items-center flex-row justify-around bg-zinc-900 h-20">
        <div className="flex items-center flex-row">
            <Image src={logo} width="40" height="40" alt="PokeNext" className="m-1.5"/>
            <Link href="/" className="text-4xl font-semibold text-white m-1.5">PokeNext</Link>
        </div>

       <div>
       <ul className="flex flex-row">
            <li className="m-4">
                <Link href="/" className="text-white hover:text-zinc-200 transition-all">Home</Link>
            </li>
            <li className="m-4">
                <Link href="/sobre" className="text-white hover:text-zinc-200 transition-all">Sobre</Link>
            </li>
        </ul>
       </div>
      </nav>
    )
}
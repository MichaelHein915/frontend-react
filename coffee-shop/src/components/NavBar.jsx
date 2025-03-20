import { IoLogoCodepen } from "react-icons/io";
import { Link } from "react-router";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
    return (
        <nav className="shadow-md h-[6.25rem] grid items-center grid-cols-2 ">
            <ul className="flex items-center gap-8 w-200">
                <IoLogoCodepen className="ml-8 cursor-pointer max-md:items-center" size={60} />
                <li><Link to={"/about"} className="max-md:hidden text-lg font-bold hover:text-cyan-700">Home</Link></li>
                <li><Link className="max-md:hidden text-lg font-bold hover:text-cyan-700">Menu</Link></li>
                <li><Link className="max-md:hidden text-lg font-bold hover:text-cyan-700">Contact</Link></li>
            </ul>
            <div className="justify-self-end mr-8">
                <button className="max-md:hidden text-white w-30 h-13 cursor-pointer bg-[#e17055]  rounded-2xl border outline-none hover:opacity-90">Sign in</button>
                <button className="max-md:hidden text-white w-30 h-13 cursor-pointer bg-[#e17055]  rounded-2xl border outline-none ml-5 hover:opacity-90 mr-5">Join now</button>
                <div className="group hidden max-md:flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-300 hover:opacity-50 cursor-pointer transition-all duration-300">
                    <CiMenuBurger className="hover:opacity-100 hidden max-md:block cursor-pointer" size={30} /></div>
            </div>
        </nav>
    );
}


export default NavBar;
import React from "react";
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";
const NavSm =() =>{
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!!!</h3>
                <span className="text-gray-400 text-xs flex items-center">Hyderabad<BiChevronRight /></span>
            </div>
            <div className="h-8 w-8">
            <BiSearch className="h-full w-full"/>
            </div>
        </div>
        </>
    )
};
const NavMd =() =>{
    return(
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm relative">
        <BiSearch className="absolute ml-2 left-3 top-1/2 transform -translate-y-1/2" />
        <input type="search" className="w-full pl-10 focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
    </div>
    )
};
const NavLg =() =>{
    return(
        <div className="container mx-auto px-4 flex items-center justify-between ">
            <div className="flex items-center w-1/2">
                <div className="w-12 h-12">
                    <img src="" alt="logo" className="w-full h-full"/>
                </div>
                <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm relative">
        <BiSearch className="absolute ml-2 left-3 top-1/2 transform -translate-y-1/2" />
        <input type="search" className="w-full pl-10 focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
    </div>

            </div>
            <div className="flex items-center gap-3 ">
            <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">Hyderabad<BiChevronDown /></span>
            <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
    Sign in
</button>
            <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full"/>
            </div>

            </div>
        </div>
    )
};

const Navbar = ()=>{
    return(
        <>
        <nav className="bg-navcol-700 px-4 py-2">
            <div className="md:hidden">
                {/*mobile Screen*/}
                <NavSm />
            </div>
            <div className="hidden lg:hidden md:flex">
                {/*tablet Screen*/}
                <NavMd />
            </div>
            <div className="hidden lg:flex">
                {/*desktop Screen*/}
                <NavLg />
            </div>

        </nav>
        </>
    )
};
export default Navbar;
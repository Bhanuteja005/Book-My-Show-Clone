import React from "react";
import { BiChevronDown, BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";
const NavSm = () => {
return (
<>
<div className="text-navcol-50 flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
      <span className="text-navcol-50 text-xs flex items-center">
         Hyderabad
         <BiChevronRight />
      </span>
   </div>
   <div className="w-8 h-8">
      <BiSearch className="w-full h-full" />
   </div>
</div>
</>
)
};
const NavMd = () => {
return (
<div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
   <BiSearch />
   <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
</div>
)
};
const NavLg = () => {
return (
<>
<div className="text-navcol-50 container mx-auto px-4 flex items-center justify-between">
   <div className="flex items-center w-1/2">
      <div className="w-12 h-12">
         <img
            src="https://in.bmscdn.com/webin/common/icons/logo.svg"
            alt="logo"
            className="w-full h-full" />
      </div>
      <div className=" w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
         <BiSearch />
         <input type="search" className="text-navcol-900 w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
      </div>
   </div>




   <div className="flex items-center gap-3">
   <span className="text-navcol-50 text-xs flex items-center hover:text-white cursor-pointer	">
      Hyderabad
      <BiChevronDown />
   </span>
   <button className="bg-navcol-600 text-white text-sm rounded px-2 py-1">
   Sign in
   </button>
   <div className="w-8 h-8 text-white">
   <BiMenu className="w-full h-full" />
   </div>
   </div>
</div>
</>
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
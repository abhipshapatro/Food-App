import React , {useState} from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import {FaUserFriends, FaWallet} from 'react-icons/fa';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    //main div
    <div className="flex mx-auto items-center justify-between max-w-[1640px] p-4">
      {/* left side */}
      <div className="flex items-center">
        {/* menu */}
        <div onClick={handleNav} className="cursor-pointer text-white mr-2">
          <AiOutlineMenu size={30} />
        </div>
        {/* heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-white mr-5">
          Best <span className="font-bold text-lightYellow">Eats</span>
        </h1>
        {/* toggle */}
        <div className="hidden lg:flex items-center bg-gray-200 p-1 rounded-full text-[14px]">
          <p className="bg-bgBlue text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Takeaway</p>
        </div>
      </div>

      {/* search input */}
      <div className="flex items-center px-2 bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="w-full bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* cart button */}
      <button className="hidden bg-white text-bgBlue rounded-full md:flex items-center py-2 px-4 ">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}

      {/* overlay */}
      {nav ? <div onClick={handleNav} className="fixed bg-black/80 w-full z-10 h-screen top-0 left-0"></div> : ''}
      

      {/* sidebar menu */}
      <div  className={nav ? "fixed w-[300px] h-screen bg-bgGray top-0 left-0 z-10 duration-300 ease-in-out font-serif tracking-normal" : "fixed w-[300px] h-screen bg-bgGray z-10 top-0 left-[-100%] duration-300 ease-in-out font-serif tracking-normal"}>
        <AiOutlineClose
          onClick={handleNav}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold text-lightYellow">Eats</span>
        </h2>
        <nav>
            <ul className="flex flex-col p-4">
                <li className="flex text-xl py-4"><TbTruckDelivery size={25} className="mr-4" /> Orders </li>
                <li className="flex text-xl py-4"><MdFavorite size={25} className="mr-4" /> Favorites </li>
                <li className="flex text-xl py-4"><FaWallet size={25} className="mr-4" /> Wallet </li>
                <li className="flex text-xl py-4"><MdHelp size={25} className="mr-4" /> Help </li>
                <li className="flex text-xl py-4"><AiFillTag size={25} className="mr-4" /> Promotions </li>
                <li className="flex text-xl py-4"><BsFillSaveFill size={25} className="mr-4" /> Best Ones </li>
                <li className="flex text-xl py-4"><FaUserFriends size={25} className="mr-4" /> Invite Friends </li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

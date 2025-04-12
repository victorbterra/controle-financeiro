'use client';
import Image from "next/image";
import Link from "next/link";
import imgProfile from "../../public/102810355.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const user = {
    name: "Victor Terra",
  };

  const navbar = {
    dashboard: "Dashboard",
    createTransaction: "Criar Transação",
    reports: "Relatórios",
  }

  return (
    <nav className="flex sticky justify-between items-center">
      <div className="flex gap-5 items-center justify-center">
        <div className="bg-slate-600 flex w-12 h-12 rounded-full items-center overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={imgProfile}
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div>
          <h1>{user.name}</h1>
          <button className="text-sm">Logout</button>
        </div>
      </div>
      <button>
        <GiHamburgerMenu 
        onClick={toggleMenu} className="md:hidden text-3xl cursor-pointer" />
      </button>
      <ul className="gap-5 hidden md:flex">
        <li>
          <Link
          className="font-medium bg-[#1D232F] flex justify-center items-center px-5 py-2 rounded-2xl" 
          href={"/dashboard"}>{navbar.dashboard}</Link>
        </li>
        <li>
          <Link
          className="font-medium bg-[#1D232F] flex justify-center items-center px-5 py-2 rounded-2xl" 
          href={"/create-transaction"}>{navbar.createTransaction}</Link>
        </li>
        <li>
          <Link
          className="font-medium bg-[#1D232F] flex justify-center items-center px-5 py-2 rounded-2xl" 
          href={"/reports"}>{navbar.reports}</Link>
        </li>
      </ul>
    </nav>
  );
}

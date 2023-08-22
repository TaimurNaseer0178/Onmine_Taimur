"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { HeaderLinks } from "../../../constans";
import Marquee from "react-fast-marquee";

const Header = () => {
  //const [iconState,setIconState]=useState(true);
  const [subLink, setSubLink] = useState("");

  const showSub = (name: string) => {
    name === subLink ? setSubLink("") : setSubLink(name);
  };
  const [header, showHeader] = useState(false);
  const toggleHeader = () => {
    showHeader((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <header className="  lg: flex   p-3  items-center justify-between bg-white border last:border-b-2   ">
          <div
            className="  w-10 h-10 p-2 justify-center items-center gap-2 rounded-md bg-background_colorr cursor-pointer"
            onClick={() => toggleHeader()}
          >
            <Image
              className=""
              src="/menu.svg"
              alt="menuu"
              height={24}
              width={24}
            />
          </div>
          <div className="flex">
            <Image
              className=""
              src="/Frame.svg"
              alt="menuu"
              height={38}
              width={38}
            />
            {header && (
              <p className=" w-36 ml-3 h-10  border-l-2 pl-2">
                Your Oportunity To Mine Bitcoin
              </p>
            )}
          </div>
          <div className="relative flex">
            <Image
              className=""
              src="/Bag.svg"
              alt="bag"
              width={24}
              height={24}
            />
            <p className="absolute left-4 mb-6 bg-red-600 text-white rounded-3xl w-[18px] h-[18px] flex items-center justify-center text-sm md:text-[10px] lg:text-[12px] xl:text-[16px]">
              1
            </p>
          </div>
        </header>
        <Marquee>
          <div className="flex space-x-[20px] text-[8px]  pt-3 items-start mx-2">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex space-x-[5px]">
                <p className="underline w-[55px] h-[12px]">Live BTC Price</p>
                <Image
                  className=""
                  src="/b.svg"
                  alt="lock"
                  width={12}
                  height={12}
                />
                <p className="w-[70px] h-[12px] font-semibold">
                  $24,3802.54 USD
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      {header && (
        <div className="rounded-md shadow-lg">
          {HeaderLinks.map((link, index) => (
            <ul
              key={index}
              className="  ml-2 min-w-max  font-medium "
              onClick={() => showSub(link.name)}
            >
              <li
                className={`flex w-full justify-between items-center  cursor-pointer p-2    ${
                  link.name === subLink
                    ? "rounded bg-gray-200 justify-normal "
                    : ""
                } `}
              >
                {link.name}
                <ChevronDownIcon
                  className={`h-5 w-5 m-[2px]   ${
                    link.name === subLink ? "rotate-180" : ""
                  } `}
                />
              </li>

              <div
                className={`
                ${link.name === subLink ? " flex-col" : "hidden"}
                `}
              >
                {link.subLink.map((slink, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer text-customBlueGray items-center pl-2 py-2 bg-white  last:border-b-2  rounded`}
                  >
                    {slink.names}
                  </li>
                ))}
              </div>
            </ul>
          ))}
          <button
            className={` justify-center mx-2 group flex  border-2 border-black rounded-lg h-[42px] w-[330px] px-4 pt-[10px]
               pb-3 items-center relative bottom-2 font-bold hover:bg-yellow-600 hover:text-white
                hover:border-none  hover:p-[18px]   `}
          >
            GET ACCESS
            <Image
              className="ml-4 group-hover:hidden :"
              src="/LOCK.svg"
              alt="lock"
              width={16}
              height={17}
            />
            <Image
              className={`ml-4 hidden group-hover:block group-hover:text-white`}
              src="/unlock.svg"
              alt="unlock"
              width={16}
              height={17}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;

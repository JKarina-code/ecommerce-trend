"use client";

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { titleFont } from "@/config/fonts";
import { useSideMenu } from "@/store/ui/ui-store";
import { useCartStore } from "@/store";
import { useState, useEffect } from "react";

const menuItems = [
  {
    name: "Women",
    path: "/gender/women",
  },
  {
    name: "Men",
    path: "/gender/men",
  },
  {
    name: "Kid",
    path: "/gender/kid",
  },
];
export const TopMenu = () => {
  const openSideMenu = useSideMenu((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 justify-between items-center w-full  border-2  border-b-gray-100 ">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Trend
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href={item.path}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link
          href={totalItemsInCart === 0 ? "/empty" : "/cart"}
          className="mx-2"
        >
          <div className="relative">
            {(loaded && totalItemsInCart > 0) && (
              <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

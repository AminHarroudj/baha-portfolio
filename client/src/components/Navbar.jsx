import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState("");
  return (
    <>
      <div className="flex justify-between max-md:px-2 md:justify-around items-center bg-[#006d77] py-4 text-white">
        <h1 className="text-2xl font-medium">
          BAHA <span className="text-[#e29578]">EDDINE</span>
        </h1>
        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex items-center gap-20 max-md:absolute max-md:flex-col max-md:bg-[#006d77] max-md:gap-6 max-md:top-16 max-md:right-0 max-md:left-44 max-md:py-6`}
        >
          <li className="hover:text-[#e29578] cursor-pointer">About</li>
          <li className="hover:text-[#e29578] cursor-pointer">Projects</li>
          <li className="hover:text-[#e29578] cursor-pointer">Contact</li>
        </ul>
        <RiMenu3Fill
          className="text-3xl md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
    </>
  );
}

export default Navbar;

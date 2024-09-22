import React from "react";
import { PiBellSimple } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-4">
        {/* Content */}
        <h1 className="text-amber-400 text-3xl poppins-bold"> UTDFreebies</h1>
        {/* Nav Items*/}
        <div className="flex gap-8 poppins-semibold text-2xl py-1 px -2">
          <p> new</p>
          <p> browse</p>
          <p> upload</p>
        </div>

        <div className="flex gap-8">
          <PiBellSimple size={"2rem"} />
          <VscAccount size={"2rem"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

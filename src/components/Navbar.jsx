import React from "react";

function Navbar() {
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper p1-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        <div className="left flex flex-1 items-center">
          {/* left div */}
          <div className="language cursor-pointer text-[16px]">English</div>
          <div className="searchInput">
            <input className="input" type="text" />
            <Search></Search>
          </div>
        </div>

        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Navbar;

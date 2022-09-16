import React from "react";

function NavBar() {
  // const gray = "#424B5C";
  // const topBg = "#0E1629";
  // const bodyBg = "#0F172A";
  // const headerText = "#35B5EE";
  // const offWhite = "#E2E8F0";

  return (
    <div className=" justify-between mx-auto items-center text-center border-b-2  border-b-[#424b5c] py-3">
      <h1 className="md:text-5xl sm:text-3xl text-xl font-bold text-[#e2e8f0]">
        Profile Card Makr!
      </h1>
      {/* <div className="text-left">
        <h4>Soon to be downloadable</h4>
        <p>Feel Free to Screenshot!</p> 
      </div> */}
    </div>
  );
}

export default NavBar;

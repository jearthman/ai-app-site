"use client";

import FlameIcon from "./icons/flame";
import SearchIcon from "./icons/search";
import NavMenu from "./nav-menu";

export default function Nav() {
  return (
    <div className="fixed top-0 z-10 w-screen bg-blue-200">
      <div className="mx-auto flex w-1/2 items-center py-3">
        <FlameIcon />
        <NavMenu />
        <div className="">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

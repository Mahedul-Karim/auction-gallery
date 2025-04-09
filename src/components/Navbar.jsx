import React from "react";
import Container from "../util/Container";

const Navbar = () => {
  return (
    <header>
      <Container>
        <nav className="flex items-center justify-between py-4">
          <p className="text-xl text-blue">
            Auction<span className="font-bold text-yellow">Gallery</span>
          </p>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Auctions</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">How to works</a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-background rounded-full relative">
              <span className="absolute top-0 right-0 text-xs text-white bg-blue-dark rounded-full size-4 grid place-items-center">9</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-6 stroke-blue-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
            <button>
              <img
                src="/assets/user.avif"
                alt=""
                className="size-10 object-cover rounded-full"
              />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
